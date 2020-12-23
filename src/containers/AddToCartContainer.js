import React from 'react';
import { useDispatch } from 'react-redux';
import { addSelectedItemsToCart } from 'src/actions/CartActions';

const AddToCartContainer = () => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(addSelectedItemsToCart());
    };
    return (
        <button
            type="button"
            className="btn action-button"
            onClick={onClickHandler}
        >
            Add To Cart
        </button>
    );
};

AddToCartContainer.propTypes = {

};

export default AddToCartContainer;
