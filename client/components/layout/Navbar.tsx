'use client'

import CustomButton from "../ui/Button";
import Image from "next/image";
import { useAuth } from "@/service/auth-context";
import Link from "next/link"
import { CustomSpinner } from "../ui/Loader";
import Profile from "../Profile";
import { useState } from "react";
import { User } from "lucide-react";
import { useSelector } from "react-redux";
import { selectUser } from "@/lib/slice/user";

const Navbar = () => {
    const { user, isFetching} = useAuth()
    // const { user } = useSelector((state: any) => state.user)
    // const user = selectUser v 
    const [openProfile, setOpenProfile] = useState<any>(null)

    const handleOpenProfileClick = () => {
        setOpenProfile(user)
    }

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
                    <CustomButton
                        className="bg-blue-100 hover:bg-blue-200 rounded-full !p-4 !py-6" 
                        handler={handleOpenProfileClick}
                    >
                        <User color="blue" strokeWidth={2} size={28}/>
                    </CustomButton>
                )}
                </div>
            </div>
            <Profile openProfile={openProfile} setOpenProfile={setOpenProfile} user={user}/>
        </nav>
    )
}

export default Navbar;