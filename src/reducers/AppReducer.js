import { APP_ACTIONS } from 'src/actions/AppActions';
import { THEMES } from 'src/constants/AppConstants';

const defaultState = {
    selectedTheme: THEMES.RED,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_ACTIONS.CHANGE_THEME:
            return {
                ...state,
                selectedTheme: action.selectedTheme,
            };
        default:
            return state;
    }
};
