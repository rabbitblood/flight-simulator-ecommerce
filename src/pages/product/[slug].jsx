import Head from "next/head";
import settings from "@data/settings";
import {useRouter} from "next/router";
import Layout from "@components/layout";
import Loader from "@components/ui/loader";
import Breadcrumb from "@components/ui/breadcrumb";
import {Fragment, useState, useEffect} from "react";
import {client, productsQuery, productQuery} from "@graphql";
import ProductDetailsContent from "@components/product/details";
import RelatedProducts from "@components/product/feed/related-products";
import ProductDescriptionReview from "@components/product/details/desc-review";

const ProductDetailsPage = ({products, product}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => url !== router.pathname ? setIsLoading(true) : setIsLoading(false);
        const handleComplete = () => setIsLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router]);

    return (
        <Layout>
            <Head>
                <title>{product?.title + " :: " + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb
                py={[60, 80]}
                mb={[60, null, 100]}
                pageTitle={product?.title}
            />

            {isLoading ? <Loader/> : (
                <Fragment>
                    <ProductDetailsContent product={product}/>

                    <ProductDescriptionReview product={product} mt={[55, null, 93]}/>

                    <RelatedProducts
                        products={products}
                        tags={product?.tags}
                        mt={[48, null, 85]}
                        categories={product?.collections?.edges}
                    />
                </Fragment>
            )}
        </Layout>
    );
};

// export const getServerSideProps = async ({params}) => {
//     const {slug} = params;
//     const product = await client(productQuery(slug));
//     const products = await client(productsQuery());

//     await new Promise(resolve => setTimeout(resolve, 10000));

//     if (!product) {
//         throw new Error(`Product with slug '${slug}' not found`);
//     }

//     if (!products) {
//         throw new Error(`Products fetching error!`);
//     }

//     return {
//         props: {
//             product: product?.productByHandle,
//             products: products?.products?.edges,
//         },
//     };
// };

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({params}) {
    const {slug} = params;
    const product = await client(productQuery(slug));
    const products = await client(productsQuery());

    if (!product) {
        throw new Error(`Product with slug '${slug}' not found`);
    }

    if (!products) {
        throw new Error(`Products fetching error!`);
    }
   
    return {
      props: {
        product: product?.productByHandle,
        products: products?.products?.edges,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }
   
  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // the path has not been generated.
  export async function getStaticPaths() {
    const productsResult = await client(productsQuery());

    const products = productsResult?.products?.edges || []
   
    // Get the paths we want to pre-render based on posts
    const paths = products.map((product) => ({
      params: { slug: product.node.handle},
    }))
   
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }

export default ProductDetailsPage;
