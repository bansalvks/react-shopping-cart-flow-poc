import { takeLatest, put, call } from 'redux-saga/effects';
import { loadProductListAction } from 'src/actions/ProductListingActions';
import { PRODUCTS_ACTION, fetchProductsSuccess } from 'src/actions/ProductsAction';
import getProductsApi from 'src/apies/ProductApi';

export function* fetchProductSaga() {
    const products = yield call(getProductsApi);
    yield put(fetchProductsSuccess({
        products,
    }));
    yield put(loadProductListAction({
        productList: products,
    }));
}

export default [
    takeLatest(PRODUCTS_ACTION.FETCH_PRODUCTS, fetchProductSaga),
];
