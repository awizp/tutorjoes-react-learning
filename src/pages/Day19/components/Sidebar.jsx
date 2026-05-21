import products from "../data/products.json";

const Sidebar = ({ filterData, handleBrandChange, handlePriceChange, handleRamAndStorageChange }) => {

    const brands = [...new Set(products.map((p) => p.brand))].sort();
    const minPrice = Math.min(...products.map(p => p.price));
    const maxPrice = Math.max(...products.map(p => p.price));
    const brandRams = [...new Set(products.map((p) => p.ram))].sort((a, b) => a - b);
    const brandStorages = [...new Set(products.map((p) => p.storage))].sort((a, b) => a - b);

    return (
        <div className="sticky w-64 top-14 left-0 p-3 px-5 shadow-lg border-r border-black/10 bg-purple-500/20">
            <div className="flex flex-col gap-5 justify-center items-start overflow-y-auto">

                <div className="w-full">
                    <h3 className="text-lg font-semibold text-purple-700">Filter by following</h3>
                </div>

                <div className="w-full justify-center items-start flex-col gap-5">

                    <div className="w-full my-3">
                        <h3 className="font-semibold mb-3">Brand</h3>

                        <div>
                            {
                                brands.map((brand, idx) => (
                                    <label key={idx} className="w-fit flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="accent-purple-700"
                                            value={filterData.brandName.includes(brand)}
                                            onChange={() => handleBrandChange(brand)}
                                        />
                                        {brand.charAt(0).toUpperCase() + brand.slice(1)}
                                    </label>
                                ))
                            }
                        </div>
                    </div>

                    <div className="w-full my-3">
                        <h3 className="font-semibold mb-3">Price</h3>

                        <input
                            type="range"
                            className="w-full accent-purple-700"
                            min={minPrice}
                            max={maxPrice}
                            value={filterData.priceRange[1]}
                            onChange={handlePriceChange}
                        />

                        <div className="w-full flex justify-between items-center text-sm font-semibold text-gray-600">
                            <span>Min: ₹{filterData.priceRange[0]}</span>
                            <span>Max: ₹{filterData.priceRange[1]}</span>
                        </div>

                    </div>

                    <div className="w-full my-3">
                        <h3 className="font-semibold mb-3">Ram</h3>

                        <select
                            name="ramDetail"
                            value={filterData.ramDetail}
                            onChange={handleRamAndStorageChange}
                            className="w-full p-1 rounded-lg border-2 border-black/30 cursor-pointer outline-none focus:border-purple-700"
                        >
                            <option value="">Select RAM</option>
                            {
                                brandRams.map((ram, idx) => (
                                    <option
                                        key={idx}
                                        value={ram}
                                    >
                                        {ram} GB
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="w-full my-3">
                        <h3 className="font-semibold mb-3">Storage</h3>

                        <select
                            name="storageDetail"
                            value={filterData.storageDetail}
                            onChange={handleRamAndStorageChange}
                            className="w-full p-1 rounded-lg border-2 border-black/30 cursor-pointer outline-none focus:border-purple-700"
                        >
                            <option value="">Select Storage</option>
                            {
                                brandStorages.map((storage, idx) => (
                                    <option key={idx} value={storage}>{storage} GB</option>
                                ))
                            }
                        </select>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Sidebar;