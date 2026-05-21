const ProductCard = ({ product, handleAddCart }) => {

    const { name, brand, color, ram, storage, display, mrp, price, image } = product;

    return (
        <div className="w-full bg-white p-3 rounded-xl cursor-default space-y-3">

            <div className="w-36 overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="w-full space-y-1">

                <h3 className="text-lg font-semibold text-purple-500">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>

                <div className="w-full space-y-1">
                    <p>{brand.charAt(0).toUpperCase() + brand.slice(1)} | {color}</p>
                    <p>{ram} GB RAM | {storage} GB Storage</p>
                </div>

                <p>{display}" display</p>

                <div className="w-full space-y-1">
                    <p className="text-xl font-semibold">₹{price}</p>
                    <p className="text-gray-600 line-through text-sm">₹{mrp}</p>
                </div>

                <button
                    className="mt-3 w-full px-3 py-2 hover:-translate-y-0.5 bg-purple-500 hover:bg-purple-600 transition cursor-pointer rounded-lg font-semibold text-white"
                    onClick={() => handleAddCart(product)}
                >
                    Add to cart
                </button>

            </div>

        </div>
    );
};

export default ProductCard;