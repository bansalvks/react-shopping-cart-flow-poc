import React from 'react';
import PropTypes from 'prop-types';
import EmptyCart from './EmptyCart';

const Cart = ({ items, remove }) => {
    const rows = Object.keys(items).map((key) => (
        <div
            className="row mt-2"
            key={items[key].id}
        >
            <div className="col-4">
                {items[key].name}
            </div>
            <div className="col-4">
                {items[key].qty}
            </div>
            <div className="col-4">
                <input
                    type="button"
                    className="btn action-button"
                    value="Remove"
                    onClick={() => remove(items[key])}
                />
            </div>
        </div>
    ));

    if (rows.length < 1) {
        return (
            <EmptyCart />
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 bg-success text-light">
                    Item
                </div>
                <div className="col-4 bg-success text-light">
                    Qty
                </div>
                <div className="col-4 bg-success text-light">
                    Remove
                </div>
            </div>

            {rows}

        </div>
    );
};

Cart.propTypes = {
    items: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        qty: PropTypes.number,
    })).isRequired,
    remove: PropTypes.func.isRequired,
};

export default React.memo(Cart);
