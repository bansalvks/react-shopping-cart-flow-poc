import React from 'react';

const EmptyCart = () => (
    <h1 className="position-absolute top-50 start-50 translate-middle">Your Cart is Empty</h1>
);

EmptyCart.propTypes = {

};

export default React.memo(EmptyCart);
