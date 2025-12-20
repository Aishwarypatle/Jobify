'use client'

import JobCard from "./JobCard";
import { useState } from "react";
import CustomModal from "../ui/Modal";
import JobDetailCard from "./JobDetailCard";
import { useGetJobs } from "@/service/mapper/useJobs";
import { CustomSkeleton } from "../ui/Loader";

const JobLists = () => {
    const { jobs, totalJobs, isFetching, isError } = useGetJobs()
    const [selectedJob, setSelectedJob] = useState<any>(null)

    const handleJobClick = (job: any) => {
        setSelectedJob(job)
    }
    if (isFetching || isError) {
        return (
            <div>
                {Array.from({ length: 6 }).map((_, i) => (
                    <CustomSkeleton key={i} />
                ))}
            </div>
    )}
    
    return (
        <>
            <div>
                {jobs?.map((job:any,i:number) => (
                    <JobCard key={i} data={job} handleJobClick={() => handleJobClick(job)}/>
                ))}
            </div>
            {selectedJob && <CustomModal
                    open={!!selectedJob}
                    onClose={() => setSelectedJob(null)}
                    title={<p className="!text-sm text-gray-700">Read the Job Details Below & Click Apply if Interested</p>}
                >
                <JobDetailCard data={selectedJob} />
            </CustomModal>}
        </>
    )
}

export default JobLists