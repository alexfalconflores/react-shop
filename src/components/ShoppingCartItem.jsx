import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ShoppingCartItem.scss';

import close from '@icons/icon_close.png';

const ShoppingCartItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (item) => {
        removeFromCart(item);
    }

    return (
        <div className="ShoppingCartItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={close} alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
}

export default ShoppingCartItem;