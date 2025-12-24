'use client'

import CustomButton from "../ui/Button";
import Image from "next/image";
import { useAuth } from "@/service/auth-context";
import Link from "next/link"
import { CustomSpinner } from "../ui/Loader";
import ProtectedRoute from "./ProtectedRoute";

const Navbar = () => {
    const { user, isFetching} = useAuth()
    
    return (
       <nav className="bg-white shadow rounded-2xl fixed top-0 left-0 w-full z-50 py-4">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">
                    <Image 
                        src="/applogo.svg" 
                        alt="Jobify Logo" 
                        width={240} 
                        height={90} 
                        className="inline-block ml-2"
                    />
                </div>
                {isFetching ? <CustomSpinner /> :
                !user ? (<div className="flex space-x-4">
                    <Link href={'/signup'}>
                        <CustomButton
                            className="px-6 py-2 bg-transparent border cursor-pointer border-blue-400 text-blue-700 rounded-2xl cursor-pointer hover:bg-blue-700 hover:text-white transition"
                        >
                            Sign Up
                        </CustomButton>
                        </Link>
                    <Link href={'/login'}>
                        <CustomButton
                            className="px-6 py-2 bg-blue-600 text-white rounded-2xl cursor-pointer hover:bg-blue-700 transition"
                        >
                        Login
                        </CustomButton>
                    </Link>
                </div>) : (
                    <ProtectedRoute>
                        <Link href="/profile">Profile</Link>
                    </ProtectedRoute>
                )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;