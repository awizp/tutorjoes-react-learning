import { MdOutlineClose } from "react-icons/md";
import CartItem from "./CartItem";

const Cart = ({ isCartShow, setIsCartShow, cartItems, handleAddCart, handleDeleteCart, handleRemoveQuantity }) => {
    return (
        <div className={`w-125 bg-white h-screen fixed top-0 right-0 px-5 p-3 transition duration-300 space-y-5 ${!isCartShow ? 'translate-x-full' : 'translate-x-0'} shadow-lg z-20`}>

            <div className="w-full flex justify-between items-center">
                <h3 className="text-lg font-semibold italic">Cart items</h3>

                <div
                    className="w-fit text-red-500 cursor-pointer"
                    onClick={() => setIsCartShow(false)}
                >
                    <MdOutlineClose size={24} />
                </div>
            </div>

            <div className="w-full">

                {
                    cartItems.length === 0 ? (
                        <p className="w-full text-center">No cart items added!</p>
                    ) : (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                handleAddCart={handleAddCart}
                                handleDeleteCart={handleDeleteCart}
                                handleRemoveQuantity={handleRemoveQuantity}
                            />
                        ))
                    )
                }

            </div>

            <div className="w-full p-3 bg-purple-600 rounded-lg text-white text-center mt-15">
                Total Price : ₹{
                    cartItems.reduce((acc, item) => (acc + item.price), 0)
                }
            </div>

        </div>
    );
};

export default Cart;