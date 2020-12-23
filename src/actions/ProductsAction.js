export const PRODUCTS_ACTION = {
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
};

export const fetchProducts = () => ({
    type: PRODUCTS_ACTION.FETCH_PRODUCTS,
});
export const fetchProductsSuccess = (payload) => ({
    type: PRODUCTS_ACTION.FETCH_PRODUCTS_SUCCESS,
    ...payload,
});
export const fetchProductsError = (payload) => ({
    type: PRODUCTS_ACTION.FETCH_PRODUCTS_ERROR,
    ...payload,
});

export default {
    PRODUCTS_ACTION,
    fetchProducts,
    fetchProductsSuccess,
    fetchProductsError,
};
