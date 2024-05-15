import cn from "classnames";
import PropTypes from 'prop-types';
import {EmptyContent} from "./style";
import {IoBagHandleOutline} from "react-icons/io5";

const EmptyProduct = ({message="There are no products!", className}) => {
    return (
        <EmptyContent className={cn(className)}>
            <IoBagHandleOutline/>
            {<h2>{message}</h2>}
        </EmptyContent>
    );
};

EmptyProduct.propTypes = {
    message: PropTypes.string,
};


export default EmptyProduct;
