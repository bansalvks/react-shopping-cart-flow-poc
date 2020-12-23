import { PRODUCT_LISTING_ACTIONS } from 'src/actions/ProductListingActions';

const defaultState = {
    productList: [],
    filteredProductList: [],
    query: '',
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case PRODUCT_LISTING_ACTIONS.CHECK: {
            const newList = state.productList.map((prod) => {
                if (prod.id === action.product.id) {
                    return {
                        ...prod,
                        isChecked: true,
                    };
                }
                return prod;
            });
            return {
                ...state,
                productList: newList,
                filteredProductList: newList.filter((prod) => prod.name.toLowerCase().indexOf(state.query.toLowerCase() || '') > -1),
            };
        }
        case PRODUCT_LISTING_ACTIONS.UNCHECK: {
            const newList = state.productList.map((prod) => {
                if (prod.id === action.product.id) {
                    return {
                        ...prod,
                        isChecked: false,
                    };
                }
                return prod;
            });
            return {
                ...state,
                productList: newList,
                filteredProductList: newList.filter((prod) => prod.name.toLowerCase().indexOf(state.query.toLowerCase() || '') > -1),
            };
        }
        case PRODUCT_LISTING_ACTIONS.LOAD_PRODUCT_LIST: {
            return {
                ...state,
                productList: action.productList,
                filteredProductList: action.productList,
            };
        }
        case PRODUCT_LISTING_ACTIONS.SEARCH: {
            const newList = state.productList.filter((prod) => prod.name.toLowerCase().indexOf(action.query.toLowerCase() || '') > -1);
            return {
                ...state,
                filteredProductList: newList,
                query: action.query,
            };
        }
        default:
            return state;
    }
};
