const CartItem = ({ item, handleAddCart, handleDeleteCart, handleRemoveQuantity }) => {
    return (
        <div className="w-full p-2 border-2 border-black/40 rounded-xl my-2 flex items-center justify-center gap-5">

            <div className="w-36 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="w-full">
                <h3 className="font-semibold text-purple-500 capitalize">{item.name}</h3>
                <p className="capitalize text-xs text-gray-600">{item.brand} | {item.color}</p>
            </div>

            <div className="w-full">
                <div>
                    <p className="text-lg font-semibold">₹{item.price}</p>
                    <p className="text-xs line-through text-gray-600">MRP: ₹{item.mrp}</p>
                </div>
            </div>

            <div className="w-full flex items-center gap-3">
                <button
                    className="rounded-lg p-1 cursor-pointer text-red-500"
                    onClick={() => handleRemoveQuantity(item.id)}
                >
                    -
                </button>
                <div>{item.quantity}</div>
                <button
                    className="rounded-lg p-1 cursor-pointer text-green-500"
                    onClick={() => handleAddCart(item)}
                >
                    +
                </button>
            </div>

            <div className="w-fit">
                <button
                    className="text-red-500 cursor-pointer text-sm"
                    onClick={() => handleDeleteCart(item.id)}
                >
                    Remove
                </button>
            </div>

        </div>
    );
};

export default CartItem;