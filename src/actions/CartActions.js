export const CART_ACTIONS = {
    CHECKOUT: 'CHECKOUT',
    ADD_ITEM_IN_CART: 'ADD_ITEM_IN_CART',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',

    ADD_SELECTED_ITEMS_TO_CART: 'ADD_SELECTED_ITEMS_TO_CART',
    LOAD_SELECTED_ITEMS_TO_CART: 'LOAD_SELECTED_ITEMS_TO_CART',
};

export const addSelectedItemsToCart = () => ({
    type: CART_ACTIONS.ADD_SELECTED_ITEMS_TO_CART,
});
export const loadSelectedItemsToCart = (payload) => ({
    type: CART_ACTIONS.LOAD_SELECTED_ITEMS_TO_CART,
    ...payload,
});
export const checkoutAction = () => ({
    type: CART_ACTIONS.CHECKOUT,
});
export const addItemInCartAction = (payload) => ({
    type: CART_ACTIONS.ADD_ITEM_IN_CART,
    ...payload,
});
export const removeItemFromCartAction = (payload) => ({
    type: CART_ACTIONS.REMOVE_ITEM_FROM_CART,
    ...payload,
});

export default {
    CART_ACTIONS,
    checkoutAction,
    addItemInCartAction,
    removeItemFromCartAction,
    addSelectedItemsToCart,
    loadSelectedItemsToCart,
};
