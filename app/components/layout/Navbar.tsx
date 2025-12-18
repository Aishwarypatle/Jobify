'use client'

import { redirect } from "next/navigation";
import CustomButton from "../ui/Button";

const Navbar = () => {

    const handleRedirectToSignIn = () => {
        redirect("/login");
    }

    return (
       <nav className="bg-white shadow rounded-2xl fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">
                    Find Remote Jobs Easily
                </div>
                <div className="flex space-x-4">
                    <CustomButton
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    handler={handleRedirectToSignIn}
                    >
                    Login
                    </CustomButton>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;