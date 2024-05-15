import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import fetch from "node-fetch";

export const serverClient = createStorefrontApiClient({
  storeDomain: "http://taosit.myshopify.com",
  apiVersion: "2024-04",
  privateAccessToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
  customFetchApi: fetch,
});
