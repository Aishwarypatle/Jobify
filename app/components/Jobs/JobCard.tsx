import { AlarmClock, House, MapPin, Star } from "lucide-react"
import CustomButton from "../ui/Button"
import Image from "next/image"
import { formatDate, formatJobPostedDateAgo, formatJobType, formatLocation, formatRemoteStatus } from "@/lib/utils"

const JobCard = ({data, handleJobClick}: any) => {

    const handleSaveJob = () => {
        // console.log("Job Saved", data)
    }

    return (
        <div className="bg-white rounded-3xl p-2 my-4">
            <div className="grid gap-2">
                <div className="flex justify-between mx-4 items-center">
                    <div className="flex gap-6 items-center">
                        <p className="!text-xs">{formatJobPostedDateAgo(data?.publication_date)}</p>
                        <div className="relative inline-block">
                            <div className={`rounded-full ${formatRemoteStatus(data?.candidate_required_location) === 'fully remote' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'} px-4 py-1 text-xs font-semibold`}>
                                {formatRemoteStatus(data?.candidate_required_location)}
                            </div>
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-3 rotate-45 bg-green-50 rounded-sm">
                            </div>
                        </div>
                    </div>
                    <div>
                        <CustomButton
                            className="!px-8 bg-transparent border !border-gray-100 rounded-full hover:!bg-gray-100 focus:!bg-gray-100 cursor-pointer"
                            handler={handleSaveJob}
                        >
                            <Star color="#6e6868" strokeWidth={1} size={48}/>
                        </CustomButton>
                    </div>
                </div>
                <div className="bg-slate-100 p-6 rounded-3xl grid grid-cols-2 gap-4 items-center" onClick={handleJobClick}>
                    <div className="flex flex-row gap-4 items-center">
                        <Image
                            src={data?.company_logo || "/logo.png"}
                            alt="company logo"
                            width={42}
                            height={42}
                            className="rounded-lg object-contain"
                            unoptimized
                        />
                        <div className="flex flex-col">
                            <h3 className="!text-lg font-semibold">{data?.title || "N/A"}</h3>
                            <h6 className="!text-md text-gray-500">{data?.company_name}</h6>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <h3 className="!text-lg font-semibold">{data?.salary || "N/A"}</h3>
                        <div className="flex gap-4 !font-light !text-sm text-gray-500">
                            <p className="flex items-center gap-1"><House size={16} color="#6d6464" strokeWidth={1} />Remote</p>
                            <p className="flex items-center gap-1"><AlarmClock size={16} color="#6d6464" strokeWidth={1} />{formatJobType(data?.type || "N/A")}</p>
                            <p className="flex items-center gap-1"><MapPin size={16} color="#6d6464" strokeWidth={1} />{formatLocation(data?.candidate_required_location || "N/A")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard