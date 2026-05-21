import ProductCard from "./ProductCard";

const Products = ({ filteredProducts, handleAddCart }) => {
    return (
        <div className="w-full space-y-5">

            <h3 className="text-xl font-bold">Products ({filteredProducts.length})</h3>

            {filteredProducts.length === 0 ? (
                <p className="font-semibold text-xl text-center italic">No products found in your criteria!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

                    {
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                handleAddCart={handleAddCart}
                            />
                        ))
                    }

                </div>
            )}

        </div>
    );
};

export default Products;