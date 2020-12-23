import { combineReducers } from 'redux';
import cartReducer from './CartReducer';
import productReducer from './ProductsReducer';
import productListingReducer from './ProductListingReducer';
import appReducer from './AppReducer';

export default combineReducers({
    cartReducer,
    productReducer,
    productListingReducer,
    appReducer,
});
