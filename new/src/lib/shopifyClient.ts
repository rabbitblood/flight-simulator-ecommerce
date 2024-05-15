import { createStorefrontApiClient } from "@shopify/storefront-api-client";

if (!process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN) {
  throw new Error("Missing NEXT_PUBLIC_STOREFRONT_API_TOKEN");
}

if (!process.env.NEXT_PUBLIC_STORE_DOMAIN) {
  throw new Error("Missing NEXT_PUBLIC_STORE_DOMAIN");
}

export const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN,
  apiVersion: process.env.NEXT_PUBLIC_STOREFRONT_API_VERSION || "2024-04",
  publicAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN,
});
