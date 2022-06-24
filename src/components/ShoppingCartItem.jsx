import React from 'react';
import '../styles/ShoppingCartItem.scss';

import close from '@icons/icon_close.png';

const ShoppingCartItem = () => {
    return (
        <div className="ShoppingCartItem">
            <figure>
                <img src="https://images.pexels.com/photos/6802843/pexels-photo-6802843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$ 30.00</p>
            <img src={close} alt="close" />
        </div>
    );
}

export default ShoppingCartItem;