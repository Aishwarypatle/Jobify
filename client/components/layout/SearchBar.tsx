'use client'

import { Search } from "lucide-react";
import CustomButton from "../ui/Button";
import { CustomInput } from "../ui/Input";

const SearchBar = () => {

    const handleSearch = () => {
        console.log("Search button clicked");
    }

    return(
        <div className="bg-white rounded-full border border-[rgb(205,214,223)] flex flex-row items-center px-6 justify-center">
            <CustomInput 
                placeholder="Search for job title" 
                className="w-full px-4 !py-7.5  focus:outline-none !border-none"
            />
            <CustomButton
                handler={handleSearch}
                className="cursor-pointer bg-transparent p-2 rounded-full hover:bg-gray-200 transition"
            >
                <Search size={24} absoluteStrokeWidth color="rgb(205,214,223)" />
            </CustomButton>
        </div>
    )
}   

export default SearchBar