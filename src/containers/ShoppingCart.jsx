import React from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem';
import '../styles/ShoppingCart.scss';

import arrow from '@icons/flechita.svg';

const ShoppingCart = () => {
    return (
        <aside className="ShoppingCart">
            <div className="title-container">
                <img src={arrow} alt="arrow" />
                <p className="title">Shopping cart</p>
            </div>
            <div className="my-order-content">
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$ 560.00</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default ShoppingCart;