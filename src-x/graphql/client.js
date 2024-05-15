import {GraphQLClient} from 'graphql-request';

if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_NAME) {
    throw new Error(
        'The SHOPIFY_STOREFRONT_NAME environment variable is not set. Please set this environment variable and try again.'
    );
}

if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error(
        'The SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variable is not set. Please set this environment variable and try again.'
    );
}

const client = async (query, variables) => {
    const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_NAME}.myshopify.com/api/2021-07/graphql.json`;

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": process.env.PRIVATE_STOREFRONT_API_TOKEN
        }
    });

    console.log(JSON.stringify(graphQLClient, null, 2))

    return await graphQLClient.request(query, variables);
}

export default client;