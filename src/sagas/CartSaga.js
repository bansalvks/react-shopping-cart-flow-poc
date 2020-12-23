import { takeLatest, put, select } from 'redux-saga/effects';
import { CART_ACTIONS, loadSelectedItemsToCart } from 'src/actions/CartActions';

export function* addToCartSaga() {
    const {
        productListingReducer: {
            filteredProductList,
        },
        cartReducer: {
            items,
        },
    } = yield select();

    const productsToBeAdded = { ...items };
    for (let i = 0; i < filteredProductList.length; i++) {
        const product = filteredProductList[i];
        if (product.isChecked) {
            const existingQty = productsToBeAdded[product.id]?.qty || 0;
            productsToBeAdded[product.id] = {
                ...product,
                qty: existingQty + 1,
            };
        }
    }
    yield put(loadSelectedItemsToCart({
        items: productsToBeAdded,
    }));
}

export default [
    takeLatest(CART_ACTIONS.ADD_SELECTED_ITEMS_TO_CART, addToCartSaga),
];
