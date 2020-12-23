import { all } from 'redux-saga/effects';
import productsSagas from './ProductsSaga';
import cartSagas from './CartSaga';

export default function* sagas() {
    yield all([
        ...productsSagas,
        ...cartSagas,
    ]);
}
