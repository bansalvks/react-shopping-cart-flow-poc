import { CART_ACTIONS } from 'src/actions/CartActions';

const defaultState = {
    items: {
        // example
        // 1: {
        //     id: 1,
        //     name: 'foo bar',
        //     qty: 10,
        // },
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CART_ACTIONS.CHECKOUT:
            return {
                ...state,
                items: {},
            };
        case CART_ACTIONS.LOAD_SELECTED_ITEMS_TO_CART:
            return {
                ...state,
                items: action.items,
            };
        case CART_ACTIONS.ADD_ITEM_IN_CART: {
            // crete a new list
            const newItemList = {
                ...state.items,
            };

            // get the item
            const existing = newItemList[action.item.id];

            // if exists then ++
            if (existing) {
                existing.qty += 1;
            }
            // add if does not exists
            else {
                newItemList[action.item.id] = action.item;
            }

            return {
                ...state,
                items: newItemList,
            };
        }

        case CART_ACTIONS.REMOVE_ITEM_FROM_CART: {
            // crete a new list
            const newItemList = {
                ...state.items,
            };

            // get the item
            const existing = newItemList[action.item.id];

            // if exists and item is more than 1 then --
            if (existing && existing.qty > 1) {
                existing.qty -= 1;
            }
            // if item is only one then delete key
            else if (existing) {
                delete newItemList[action.item.id];
            }

            return {
                ...state,
                items: newItemList,
            };
        }
        default:
            return state;
    }
};
