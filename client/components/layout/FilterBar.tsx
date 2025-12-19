'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery";
import SearchBar from "./SearchBar";
import CustomButton from "../ui/Button";
import { CustomDropdown } from "../ui/Dropdown";
import { jobTypes, locationType, payRanges, seniortyLevels } from "@/data";
import { BadgeDollarSign, House, Layers, Trophy } from "lucide-react";

const FilterBar = () => {
    const { isMobile, isDesktop, isReady } = useMediaQuery()
    return (
        <div className="bg-white rounded-3xl p-2">
            <div className="grid bg-slate-100 items-center rounded-3xl p-6 gap-3">
                <div className="">
                    <SearchBar />
                </div>
                <div>
                </div>
            {isMobile ? (
                <div className="p-2">
                    <CustomButton className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700">
                        Filters
                    </CustomButton>
                </div>
            ) : (
                <div className="px-6 flex gap-12 justify-center">
                    <div>
                        <CustomDropdown 
                            options={jobTypes}
                            onSelect={(value) => console.log("Selected Job Type:", value)}
                            className="flex"
                        >
                                <Layers color="#57575dff" size={20}  strokeWidth={1}/><span className="text-gray-700 ml-2">Job Type</span>
                        </CustomDropdown>
                    </div>
                    <div>
                        <CustomDropdown 
                            options={locationType}
                            onSelect={(value) => console.log("Selected Job Type:", value)}
                            className="flex"
                        >
                                <House color="#5c5757" size={20} strokeWidth={1} /><span className="text-gray-700 ml-2">Location</span>
                        </CustomDropdown>
                    </div>
                    <div>
                        <CustomDropdown 
                            options={payRanges}
                            onSelect={(value) => console.log("Selected Job Type:", value)}
                            className="flex"
                        >
                                <BadgeDollarSign color="#5c5757" size={20} strokeWidth={1} /><span className="text-gray-700 ml-2">Pay</span>
                        </CustomDropdown>
                    </div>
                    <div>
                        <CustomDropdown 
                            options={seniortyLevels}
                            onSelect={(value) => console.log("Selected Job Type:", value)}
                            className="flex"
                        >
                                <Trophy color="#746d6d" size={20} strokeWidth={1} /><span className="text-gray-700 ml-2">Seniority</span>
                        </CustomDropdown>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default FilterBar;