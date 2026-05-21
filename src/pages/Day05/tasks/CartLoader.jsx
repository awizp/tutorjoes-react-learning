import { useState } from "react";
import { products } from "../data/products";

import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Cart from "../components/Cart.jsx";

const CartLoader = () => {

    const [productsData, setProductsData] = useState(products);
    const [cartItems, setCartItems] = useState([]);
    const [isCartShowing, setIsCartShowing] = useState(false);

    const addToCart = (id) => {

        const addItem = productsData.find(item => item.id === id);

        const existingItem = cartItems.find(item => item.id === id);

        if (existingItem) return;

        setCartItems((items) => {
            return [
                ...items, addItem
            ];
        });
    };

    const handleCartShow = () => {
        setIsCartShowing(prev => !prev);
    };

    return (
        <>
            <Navbar cart={cartItems} handleCartShow={handleCartShow} />
            {!isCartShowing && <Main products={productsData} addToCart={addToCart} />}
            {isCartShowing && cartItems.length > 0 && <Cart cart={cartItems} />}
        </>
    );
};

export default CartLoader;