import React from 'react';
import AddToCartContainer from './containers/AddToCartContainer';
import CheckoutContainer from './containers/CheckoutContainer';
import ThemSwitchContainer from './containers/ThemSwitchContainer';
import SearchContainer from './containers/SearchContainer';
import CartContainer from './containers/CartContainer';
import ProductListingContainer from './containers/ProductListingContainer';
import ThemeContainer from './containers/ThemeContainer';

export default function App() {
    return (
        <ThemeContainer>
            <div className="container">
                {/* header */}
                <div className="row mt-2 mb-2">
                    <ThemSwitchContainer />
                </div>
                {/* main content */}
                <div className="row mb-2">
                    {/* left panel */}
                    <div className="col border border-1 me-1">
                        <div className="container p-0">
                            {/* search */}
                            <div className="row mt-2 mb-3">
                                <SearchContainer />
                            </div>

                            {/* product list */}
                            <div className="row mb-2">
                                <ProductListingContainer />
                            </div>
                        </div>
                    </div>
                    {/* right panel */}
                    <div className="col border border-1 ms-1 position-relative">
                        <CartContainer />
                    </div>
                </div>
                <div className="row">
                    {/* add to cart */}
                    <div className="col border border-1 p-2 text-center me-1">
                        <AddToCartContainer />
                    </div>

                    {/* checkout */}
                    <div className="col border border-1 p-2 text-center ms-1">
                        <CheckoutContainer />
                    </div>
                </div>
            </div>
        </ThemeContainer>
    );
}
