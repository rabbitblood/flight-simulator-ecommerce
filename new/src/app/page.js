import Image from "next/image";
import styles from "./page.module.css";
import { serverClient } from "@/lib/serverClient";
import { productsQuery } from "@/graphql/queries";

export default async function Home() {
  const products = await serverClient.request(productsQuery);

  return (
    <div className={styles.main}>
      {products.data && products.data.products.edges.map((node) => (
        <div key={node.node.title}>{node.node.title}</div>
      ))}
    </div>
  );
}
