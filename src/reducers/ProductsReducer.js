import { PRODUCTS_ACTION } from 'src/actions/ProductsAction';

const defaultState = {
    products: [],
    isFetchSuccess: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case PRODUCTS_ACTION.FETCH_PRODUCTS:
            return {
                ...state,
                isFetchSuccess: null,
            };
        case PRODUCTS_ACTION.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products,
                isFetchSuccess: true,
            };
        case PRODUCTS_ACTION.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                isFetchSuccess: false,
            };
        default:
            return state;
    }
};
