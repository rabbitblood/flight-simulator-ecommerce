import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import fetch from "node-fetch";

export const serverClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN,
  apiVersion: process.env.NEXT_PUBLIC_STOREFRONT_API_VERSION || "2024-04",
  privateAccessToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
  customFetchApi: fetch,
});