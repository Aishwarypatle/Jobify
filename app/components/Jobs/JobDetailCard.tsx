import { Star } from "lucide-react"
import Image from "next/image"
import CustomButton from "../ui/Button"

const JobDetailCard = ({ data }: any) => {    
    return (
        <div className="bg-white rounded-3xl !h-full !overflow-y-auto p-3">
            <div className="bg-slate-100 p-6 rounded-3xl grid gap-4 items-center" >
                <div className="flex flex-row justify-between items-center"> 
                    <div className="flex gap-2">
                        <Image
                            src={"/logo.png"}
                            alt="company logo"
                            width={42}
                            height={42}
                            className="rounded-lg object-contain"
                            />
                        <div className="flex flex-col">
                            <h3 className="!text-lg font-semibold">{data?.title || "N/A"}</h3>
                            <h6 className="!text-md text-gray-600">{data?.company_name || "N/A"}</h6>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-end gap-3">
                        <CustomButton 
                            className="!px-8 py-4 bg-transparent hover:bg-gray-200 text-gray-600 rounded-full !border !border-gray-300"
                            handler={() => console.log("Save Job")}
                        >
                            <Star color="#6e6868" strokeWidth={1} size={48}/>
                        </CustomButton>
                        <CustomButton 
                            className="px-6 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                            handler={() => window.open(data?.url, "_blank")}
                        >
                            Apply
                        </CustomButton>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex flex-col gap-2 mt-2">
                        <p><span className="font-semibold">Location:</span> {data?.location || "N/A"}</p>
                        <p><span className="font-semibold">Experience:</span> {data?.experience || "N/A"}</p>
                        <p><span className="font-semibold">Salary:</span> {data?.salary || "N/A"}</p>
                    </div>
                </div>
            </div>
            <div 
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: data?.description || "No description available" }} 
            />
        </div>
    )
}

export default JobDetailCard