"use client"

import Header from "./header";
import CartButton from "../cart/button";
import { MobileNavbar } from "./navbar";
import MiniCartSidebar from "../cart/minicart-sidebar";
import SearchForm from "../ui/search";
import SettingsSidebar from "./settings";
import Footer from "./footer";
import MobileFooter from "./mobile-footer";
import { Main } from "./header/style";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Providers from "./providers";
import { client } from "@/lib/shopifyClient";
import productsQuery from "@/graphql/query/products";

const Layout = ({children, bg="secondary", ...props}) => {
    const router = useRouter();
    const [isShowConfig, setIsShowConfig] = useState(false);
    const [isShowMiniCart, setShowMiniCart] = useState(false);
    const [isShowSearchBox, setIsShowSearchBox] = useState(false);
    const [isShowMobileNav, setIsShowMobileNav] = useState(false);

    const onMiniCartHandler = () => {
        document.querySelector('body').classList.toggle('overflow');
        setShowMiniCart(prevState => !prevState);
    };

    const onSearchBoxHandler = () => {
        document.querySelector('body').classList.toggle('overflow');
        setIsShowSearchBox(prevState => !prevState)
    }

    const onMobileNavHandler = () => {
        document.querySelector('body').classList.toggle('overflow');
        setIsShowMobileNav(prevState => !prevState)
    }

    const onConfigHandler = () => {
        document.querySelector('body').classList.toggle('overflow');
        setIsShowConfig(prevState => !prevState)
    }

    // useEffect(() => {
    //     router.events.on('routeChangeStart', () => {
    //         document.querySelector('body').classList.remove('overflow');
    //     });
    // }, [])

    return (
        <Providers>
        <body>
            <button style={{background: "red", zIndex: 100000, position: "relative"}} onClick={async () => {
                const { data, errors, extensions } = await client.request(productsQuery);
              
                  console.log(data);
            }}>Fetch products</button>
            <Header
                bg={bg}
                onConfigHandler={onConfigHandler}
                onMiniCartHandler={onMiniCartHandler}
                onSearchBoxHandler={onSearchBoxHandler}
                onMobileNavHandler={onMobileNavHandler}
            />

            <CartButton
                onHandler={onMiniCartHandler}
            />

            <MobileNavbar
                isOpen={isShowMobileNav}
                onHandler={onMobileNavHandler}
            />

            <MiniCartSidebar
                isOpen={isShowMiniCart}
                onHandler={onMiniCartHandler}
            />

            <SearchForm
                isShow={isShowSearchBox}
                onHandler={onSearchBoxHandler}
            />

            <SettingsSidebar
                isOpen={isShowConfig}
                onHandler={onConfigHandler}
            />

            <Main {...props}>
                {children}
                <Footer mt={[60, null, 100]}/>
            </Main>

            {/* <MobileFooter
                onMiniCartHandler={onMiniCartHandler}
            /> */}
        </body>
        </Providers>
    );
};

export default Layout;
