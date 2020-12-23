import React from 'react';
import PropTypes from 'prop-types';

const CheckList = ({ items, onCheckHandler }) => {
    const rows = items.map((item) => (
        <div
            className="form-check"
            key={item.id}
        >
            <input
                onChange={() => {
                    onCheckHandler(item, !item.isChecked);
                }}
                className="form-check-input"
                type="checkbox"
                checked={!!item.isChecked}
                id={item.id}
            />
            <label
                className="form-check-label"
                htmlFor={item.id}
            >
                {item.name}
            </label>
        </div>
    ));

    return (
        <div>
            {rows}
        </div>
    );
};
CheckList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        isChecked: PropTypes.bool,
    })),
    onCheckHandler: PropTypes.func.isRequired,
};

CheckList.defaultProps = {
    items: [],
};

export default React.memo(CheckList);
