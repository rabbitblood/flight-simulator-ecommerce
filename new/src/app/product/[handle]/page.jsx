"use client";
import { productQuery } from "@/graphql/queries";
import { client } from "@/lib/shopifyClient";

export function Product({ handle }) {
  async function fetchProducts() {
    const { data, errors, extensions } = await client.request(productQuery, {
      variables: {
        handle,
      },
    });

    console.log(data);
  }
  return (
    <div>
      <button onClick={fetchProducts}>Fetch</button>
    </div>
  );
}
