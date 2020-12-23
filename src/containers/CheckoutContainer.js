import React from 'react';
import { useDispatch } from 'react-redux';
import { checkoutAction } from 'src/actions/CartActions';

const CheckoutContainer = () => {
    const dispatch = useDispatch();

    const checkoutHandler = () => {
        dispatch(checkoutAction());
    };

    return (
        <button
            type="button"
            className="btn action-button"
            onClick={checkoutHandler}
        >
            Checkout
        </button>
    );
};

CheckoutContainer.propTypes = {

};

export default CheckoutContainer;
