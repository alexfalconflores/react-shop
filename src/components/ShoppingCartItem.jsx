import React from 'react';
import '@styles/ShoppingCartItem.scss';

import close from '@icons/icon_close.png';

const ShoppingCartItem = ({ product }) => {
    return (
        <div className="ShoppingCartItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={close} alt="close" />
        </div>
    );
}

export default ShoppingCartItem;