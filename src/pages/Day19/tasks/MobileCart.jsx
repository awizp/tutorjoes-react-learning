import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Cart from "../components/Cart";
import products from "../data/products.json";
import { useState } from "react";

const MobileCart = () => {
    const minPrice = Math.min(...products.map(p => p.price));
    const maxPrice = Math.max(...products.map(p => p.price));

    const [filterData, setFilterData] = useState({
        searchValue: null,
        brandName: [],
        priceRange: [minPrice, maxPrice],
        ramDetail: null,
        storageDetail: null
    });

    const [cartItems, setCartItems] = useState([]);
    const [isCartShow, setIsCartShow] = useState(false);

    const handleSearchChange = (e) => {
        const search = e.target.value;
        setFilterData({
            ...filterData,
            searchValue: search === "" ? null : search
        });
    };

    const handleBrandChange = (brand) => {
        filterData.brandName.includes(brand) ? (
            setFilterData({
                ...filterData,
                brandName: filterData.brandName.filter((b) => b !== brand)
            })
        ) : (
            setFilterData({
                ...filterData,
                brandName: [...filterData.brandName, brand]
            })
        );
    };

    const handlePriceChange = (e) => {
        const maxPriceValue = e.target.value;

        setFilterData({
            ...filterData,
            priceRange: [minPrice, maxPriceValue]
        });
    };

    const handleRamAndStorageChange = (e) => {
        const { name, value } = e.target;

        setFilterData({
            ...filterData,
            [name]: value === "" ? null : value
        });
    };

    const filteredProducts = products.filter((product) => {

        const searchMatches = !filterData.searchValue ? product : (
            product.name.toLocaleLowerCase().includes(filterData.searchValue.toLocaleLowerCase()) ||
            product.brand.toLocaleLowerCase().includes(filterData.searchValue.toLocaleLowerCase()) ||
            product.color.toLocaleLowerCase().includes(filterData.searchValue.toLocaleLowerCase())
        );

        const brandMatches = filterData.brandName.length === 0 || filterData.brandName.includes(product.brand);

        const priceMatches = filterData.priceRange[0] <= product.price && filterData.priceRange[1] >= product.price;

        const ramMatches = !filterData.ramDetail ? product : product.ram === parseInt(filterData.ramDetail);

        const storageMatches = !filterData.storageDetail ? product : parseInt(filterData.storageDetail) === product.storage;

        return searchMatches && brandMatches && priceMatches && ramMatches && storageMatches;
    });

    const handleAddCart = (product) => {

        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            setCartItems(cartItems.map((item) => (
                item.id === existingItem.id ? {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                    price: (existingItem.price / existingItem.quantity) * (existingItem.quantity + 1)
                } : item
            )));
            return;
        }

        setCartItems([...cartItems, { ...product, quantity: 1 }]);
    };

    const handleDeleteCart = (id) => {
        if (confirm("Are you sure want to remove?")) {
            setCartItems(cartItems.filter((product) => product.id !== id));
        }
    };

    const handleRemoveQuantity = (id) => {
        setCartItems(cartItems.map((item) => (
            item.id === id ? {
                ...item,
                quantity: item.quantity <= 1 ? 1 : item.quantity - 1,
                price: item.quantity <= 1 ? item.price : (item.price / item.quantity) * (item.quantity - 1)
            } : item
        )));
    };

    return (
        <div className="w-full">
            <Navbar
                filterData={filterData}
                handleSearchChange={handleSearchChange}
                setIsCartShow={setIsCartShow}
                cartItems={cartItems}
            />
            <Main
                filterData={filterData}
                handleBrandChange={handleBrandChange}
                handlePriceChange={handlePriceChange}
                handleRamAndStorageChange={handleRamAndStorageChange}
                filteredProducts={filteredProducts}
                handleAddCart={handleAddCart}
            />

            <Cart
                isCartShow={isCartShow}
                setIsCartShow={setIsCartShow}
                cartItems={cartItems}
                handleDeleteCart={handleDeleteCart}
                handleAddCart={handleAddCart}
                handleRemoveQuantity={handleRemoveQuantity}
            />
        </div>
    );
};

export default MobileCart;