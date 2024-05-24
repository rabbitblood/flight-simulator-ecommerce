import Head from 'next/head'
import Layout from '@components/layout'
import settings from '@data/settings.json'
// import LatestBlog from "@components/blog/posts";
import Promotions from '@components/promotions'
import Categories from '@components/categories'
import { ProductsTab } from '@components/product/feed'
import { SliderTwo as Slider } from '@components/slider'
import { client, blogsQuery, productsQuery, collectionsQuery } from '@graphql'
import Clients from '@components/testimonials/Clients'
import Testimonials from '../components/testimonials/Testimonials'
import builder from '@builder.io/react'
import { useEffect, useState } from 'react'

const HomeTwo = ({ blogs, products, collections }) => {
    const [sliderData, setSliderData] = useState([])

    useEffect(() => {
        builder
            .get('home-page-banner')
            .promise()
            .then(({ data }) => {
                setSliderData(
                    data.bannerSlides.map((slide) => {
                        return {
                            subtitle: slide.bannerSlide.subtitle,
                            title: slide.bannerSlide.title,
                            content: slide.bannerSlide.content,
                            thumb: slide.bannerSlide.image,
                            buttonText: slide.bannerSlide.buttonText,
                            buttonToUrl: slide.bannerSlide.buttonToUrl,
                        }
                    })
                )
            })
    }, [])

    return (
        <Layout>
            <Head>
                <title>{'Home' + settings?.title}</title>
                <meta name="description" content={settings?.description} />
            </Head>

            <Slider
                animate={true}
                data={sliderData}
                settings={{ effect: 'fade', speed: 1000 }}
            />

            {/* 
            <Clients />

            <Testimonials /> */}

            <Categories categories={collections} />

            <ProductsTab
                products={products}
                limit={8}
                className="featured-products"
            />

            <Promotions fluid={true} products={products} />

            {/* <LatestBlog posts={blogs} pt={[60, 60, 100]}/> */}
        </Layout>
    )
}

export const getStaticProps = async () => {
    const blogsData = await client(blogsQuery(4)),
        blogs = blogsData?.blogs?.edges[0]?.node?.articles?.edges,
        productsData = await client(productsQuery(50)),
        products = productsData?.products?.edges,
        collectionsData = await client(collectionsQuery(5)),
        collections = collectionsData?.collections?.edges

    return {
        props: {
            blogs,
            products,
            collections,
        },
        revalidate: 60,
    }
}

export default HomeTwo
