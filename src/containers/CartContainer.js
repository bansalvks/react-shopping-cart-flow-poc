import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { removeItemFromCartAction } from 'src/actions/CartActions';
import Cart from 'src/components/Cart';

const CartContainer = () => {
    const { items } = useSelector((state) => state.cartReducer, shallowEqual);
    const dispatch = useDispatch();
    const removeHandler = useCallback((item) => {
        dispatch(removeItemFromCartAction({ item }));
    }, [
        dispatch,
    ]);

    return (
        <Cart
            items={items}
            remove={removeHandler}
        />
    );
};

CartContainer.propTypes = {
};

export default CartContainer;
