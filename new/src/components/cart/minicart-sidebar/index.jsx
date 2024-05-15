import EmptyProduct from '@/components/ui/empty';
import OffCanvas from '@/components/ui/offCanvas';
import {OffCanvasCloseBtn, OffCanvasHead, OffCanvasTitle}from '@/components/ui/offCanvas/style';
import { CURRENCY } from '@/utils/constant';
import { getCartTotalPrice } from '@/utils/product';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import MiniCartProduct from './single-item';

import PerfectScrollbar from "react-perfect-scrollbar";
import {MiniCartList, MiniCartFooter, BtnCheckout, TotalPrice} from './style';


const MiniCartSidebar = ({isOpen, onHandler}) => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const cartTotalPrice = getCartTotalPrice(shoppingCart);

    return (
        <OffCanvas open={isOpen} onHandler={onHandler}>
            <OffCanvasHead>
                <OffCanvasTitle>Cart</OffCanvasTitle>
                <OffCanvasCloseBtn onClick={() => onHandler()}>x</OffCanvasCloseBtn>
            </OffCanvasHead>

            <MiniCartList>
                {shoppingCart.length > 0 ? (
                    <PerfectScrollbar>
                        {shoppingCart?.map(product => (
                            <MiniCartProduct product={product} key={product?.cartId}/>
                        ))}
                    </PerfectScrollbar>
                ) : (
                    <EmptyProduct/>
                )}
            </MiniCartList>

            <MiniCartFooter>
                <BtnCheckout
                    tag="a"
                    bg="primary"
                    color="white"
                    hvrColor="white"
                    href="/cart"
                    hvrBg="secondary"
                    fontWeight="subHeading"
                >
                    View Cart
                    <TotalPrice>
                        {CURRENCY + cartTotalPrice.toFixed(2)}
                    </TotalPrice>
                </BtnCheckout>
            </MiniCartFooter>
        </OffCanvas>
    );
};

MiniCartSidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onHandler: PropTypes.func.isRequired
};


export default MiniCartSidebar;