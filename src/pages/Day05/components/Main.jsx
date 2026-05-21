const Main = ({ products, addToCart }) => {
    return (
        <div className="w-full py-5">
            <div className="container mx-auto px-3 md:px-0 flex justify-center items-center">

                <div className="grid grid-cols-5 gap-10 justify-center items-center">

                    {products.map((product, idx) => (
                        <div key={product.id + idx} className="rounded-xl p-3 border-2 border-black/40 hover:-translate-y-1.5 transition hover:shadow space-y-2">
                            <div className="w-full rounded-xl overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-fill" />
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-lg">{product.name}</p>
                                <p className="font-semibold text-sm text-gray-800">₹{product.price}</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-sm text-gray-600">Stock: {product.stock}</p>
                                <p className="font-semibold text-sm text-gray-600">{product.quantity} {product.measurement}</p>
                            </div>

                            <button onClick={() => addToCart(product.id)}
                                className="w-full py-1.5 rounded-lg cursor-pointer bg-green-600 mt-3">Add to cart</button>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Main;