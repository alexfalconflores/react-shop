import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import addToCart from '@icons/bt_add_to_cart.svg';

/* [1] ProductItem component receive a prop called product  */
const ProductItem = ({product}) => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	}
	return (
		<div className="ProductItem">
			{/* [2] Render the product image in this case the first image */}
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					{/* [3] Render the product title and product price */}
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;