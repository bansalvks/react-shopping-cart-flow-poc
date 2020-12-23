export const APP_ACTIONS = {
    CHANGE_THEME: 'CHANGE_THEME',
};

export const changeThemeAction = (payload) => ({
    type: APP_ACTIONS.CHANGE_THEME,
    ...payload,
});

export default {
    APP_ACTIONS,
    changeThemeAction,
};
