import React from 'react';
import { useDispatch } from 'react-redux';
import { changeThemeAction } from 'src/actions/AppActions';
import { THEMES } from 'src/constants/AppConstants';

const ThemSwitchContainer = () => {
    const dispatch = useDispatch();

    const changeToRedTheme = () => {
        dispatch(changeThemeAction({
            selectedTheme: THEMES.RED,
        }));
    };

    const changeToBlueTheme = () => {
        dispatch(changeThemeAction({
            selectedTheme: THEMES.BLUE,
        }));
    };

    return (
        <div className="border border-1 p-2">
            <div className="float-end me-2">
                <div className="form-check">

                    <label
                        className="form-check-label"
                        htmlFor={THEMES.BLUE}
                    >
                        Blue Theme
                        <input
                            onChange={changeToBlueTheme}
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id={THEMES.BLUE}
                        />
                    </label>
                </div>
                <div className="form-check">
                    <label
                        className="form-check-label"
                        htmlFor={THEMES.RED}
                    >
                        Red Theme
                        <input
                            onChange={changeToRedTheme}
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id={THEMES.RED}
                            defaultChecked
                        />
                    </label>
                </div>
            </div>

        </div>
    );
};

ThemSwitchContainer.propTypes = {

};

export default ThemSwitchContainer;
