export const PRODUCT_LISTING_ACTIONS = {
    CHECK: 'CHECK',
    UNCHECK: 'UNCHECK',
    LOAD_PRODUCT_LIST: 'LOAD_PRODUCT_LIST',
    SEARCH: 'SEARCH',
};

export const checkProductAction = (payload) => ({
    type: PRODUCT_LISTING_ACTIONS.CHECK,
    ...payload,
});
export const uncheckProductAction = (payload) => ({
    type: PRODUCT_LISTING_ACTIONS.UNCHECK,
    ...payload,
});
export const loadProductListAction = (payload) => ({
    type: PRODUCT_LISTING_ACTIONS.LOAD_PRODUCT_LIST,
    ...payload,
});
export const searchAction = (payload) => ({
    type: PRODUCT_LISTING_ACTIONS.SEARCH,
    ...payload,
});

export default {
    PRODUCT_LISTING_ACTIONS,
    checkProductAction,
    uncheckProductAction,
    loadProductListAction,
};
