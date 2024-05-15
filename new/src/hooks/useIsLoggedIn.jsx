import Cookies from "js-cookie";
import { decode } from "js-base64";
import { useState, useEffect } from "react";
import { client } from "@/lib/shopifyClient";
import customerQuery from "@/graphql/query/customer";
import { productsQuery } from "@/graphql/queries";

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    client.request(productsQuery).then((res) => {
      console.log("productsQuery", res);
    });
    // const encodedToken = Cookies.get("access_token");
    // const token = encodedToken && decode(encodedToken);
    // client(customerQuery(token)).then((res) => {
    //   if (res?.customer) {
    //     setIsLoggedIn(true);
    //   }
    // });
  }, []);

  return isLoggedIn;
};

export default useIsLoggedIn;
