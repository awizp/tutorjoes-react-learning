import { BsCart4 } from "react-icons/bs";

const Navbar = ({ cart, handleCartShow }) => {
    return (
        <div className="w-full py-5">
            <div className="container mx-auto px-3 md:px-0 flex justify-between items-center">

                <h1 className="text-3xl font-semibold italic">Carts</h1>

                <div onClick={handleCartShow}
                    className="cursor-pointer relative">
                    <BsCart4 size={25} />
                    <div className="w-5 h-5 absolute -top-3 -right-3 rounded-full p-1 bg-green-500 flex justify-center items-center text-sm">{cart.length}</div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;