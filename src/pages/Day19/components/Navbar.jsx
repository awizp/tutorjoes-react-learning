import { FaOpencart } from "react-icons/fa";

const Navbar = ({ filterData, handleSearchChange, setIsCartShow, cartItems }) => {
    return (
        <nav className="w-full py-3 bg-purple-500 text-white sticky top-0 z-10">
            <div className="container mx-auto px-3 md:px-0">

                <div className="w-full flex justify-between p-1.5 items-center">
                    <h1 className="font-bold text-2xl italic">MobiCart</h1>

                    <input
                        type="text"
                        placeholder="🔍 Search items here..."
                        className="rounded-full p-1 px-3 border-2 border-black/60 w-125 bg-white text-black outline-none focus:border-purple-600"
                        value={filterData.searchValue}
                        onChange={handleSearchChange}
                    />

                    <div
                        className="cursor-pointer w-fit relative"
                        onClick={() => setIsCartShow(true)}
                    >
                        <FaOpencart size={24} />

                        {cartItems.length > 0 &&
                            <div className="w-6 h-6 rounded-full bg-red-500 text-white flex justify-center items-center absolute -right-3 -top-3">
                                {cartItems.length}
                            </div>
                        }
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;