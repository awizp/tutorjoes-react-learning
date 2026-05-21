import { useState, useEffect } from "react";

const Cart = ({ cart }) => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const addQuantityHandle = (id) => {
        const addedItems = cartItems.map((item) => {
            return item.id === id ? (
                {
                    ...item,
                    quantity: item.quantity === item.stock ? item.quantity : item.quantity + 1,
                    price: ((item.price / item.quantity) * (item.quantity + 1)),
                }
            ) : (item);
        });

        setCartItems(addedItems);
    };

    const subQuantityHandle = (id) => {
        const addedItems = cartItems.map((item) => {
            return item.id === id ? (
                {
                    ...item,
                    quantity: item.quantity <= 1 ? 1 : item.quantity - 1,
                    price: item.quantity <= 1 ? item.price : ((item.price / item.quantity) * (item.quantity - 1)),
                }
            ) : (item);
        });

        setCartItems(addedItems);
    };

    const totalPrice = () => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price;
        }, 0);

        return total;
    };

    return (
        <div className="w-full py-15">
            <div className="container mx-auto px-3 md:px-0">

                <div className="flex flex-col w-full gap-12 items-start justify-between">
                    {cartItems.map((item, idx) => (
                        <div key={item.id + idx} className="w-[60%] rounded-xl p-3 border-2 border-black/40 flex gap-10 items-center justify-between">
                            <div className="w-55 overflow-hidden rounded-xl">
                                <img src={item.image} alt={item.name} className="w-full h-full object-fill" />
                            </div>

                            <div className="w-full flex items-center gap-5 justify-center text-nowrap">
                                <button onClick={() => subQuantityHandle(item.id)}
                                    className="w-6 h-6 p-1 rounded-lg bg-red-500 cursor-pointer flex justify-center items-center">-</button>

                                <div className="p-1 border border-black rounded-lg text-sm text-gray-700 font-semibold">{item.quantity} {item.measurement}</div>

                                <button onClick={() => addQuantityHandle(item.id)}
                                    className="w-6 h-6 p-1 rounded-lg bg-green-500 cursor-pointer flex justify-center items-center">+</button>
                            </div>

                            <div className="w-full flex items-center gap-5 justify-center text-nowrap">
                                <h3 className="font-semibold italic">{item.name}</h3>
                                <p className="text-sm font-semibold text-gray-700">₹{item.price}</p>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="mt-15 flex w-full items-end justify-center gap-4 text-nowrap flex-col">
                    <h3 className="text-sm text-gray-800"><b>Total products:</b> {cart.length} products</h3>
                    <h2 className="text-xl"><b>Total Price:</b> ₹{totalPrice()} </h2>
                </div>

            </div>
        </div>
    );
};

export default Cart;