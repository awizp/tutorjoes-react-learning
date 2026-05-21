import { Outlet } from "react-router";

import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
        <main className="w-full bg-light-gray text-blacky">

            {/* navbar section */}
            <Navbar />

            <Outlet />

        </main>
    );
};

export default RootLayout;