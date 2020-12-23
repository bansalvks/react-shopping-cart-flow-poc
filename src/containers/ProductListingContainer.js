import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'src/actions/ProductsAction';
import { checkProductAction, uncheckProductAction } from 'src/actions/ProductListingActions';
import CheckList from 'src/components/CheckList';

const ProductListingContainer = () => {
    const {
        filteredProductList,
    } = useSelector((state) => state.productListingReducer, shallowEqual);

    const dispatch = useDispatch();

    // did mount
    useEffect(() => {
        dispatch(fetchProducts());
    }, [
        dispatch,
    ]);

    const onCheckHandler = useCallback((product, isChecked) => {
        if (isChecked) {
            dispatch(checkProductAction({
                product,
            }));
        }
        else {
            dispatch(uncheckProductAction({
                product,
            }));
        }
    }, [
        dispatch,
    ]);

    return (
        <CheckList
            items={filteredProductList}
            onCheckHandler={onCheckHandler}
        />
    );
};

ProductListingContainer.propTypes = {

};

export default ProductListingContainer;
