import Products from "./Products";
import Sidebar from "./Sidebar";

const Main = ({ filterData, handleBrandChange, handlePriceChange, handleRamAndStorageChange, filteredProducts, handleAddCart }) => {
    return (
        <div className="w-full bg-purple-500/30">

            <div className="flex">
                <Sidebar
                    filterData={filterData}
                    handleBrandChange={handleBrandChange}
                    handlePriceChange={handlePriceChange}
                    handleRamAndStorageChange={handleRamAndStorageChange}
                />

                <div className="w-full flex-1 p-10">
                    <Products
                        filteredProducts={filteredProducts}
                        handleAddCart={handleAddCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;