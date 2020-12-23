import React from 'react';
import PropTypes from 'prop-types';
import { shallowEqual, useSelector } from 'react-redux';

const ThemeContainer = ({
    children,
}) => {
    const {
        selectedTheme,
    } = useSelector((state) => state.appReducer, shallowEqual);

    return (
        <div className={selectedTheme}>
            {children}
        </div>
    );
};

ThemeContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContainer;
