import { useGetJobsQuery } from "../query/jobs/useJobsQuery";

export const useGetJobs = () => {
    const { data, isFetching, isError} = useGetJobsQuery();
    const jobsData = data?.jobs || [];
    const totalJobs = data?.['job-count'] || 0;
    
    const mappedJobs = jobsData.map((job: any) => ({
        id: job?.id,
        title: job?.title,
        company_name: job.company_name,
        category: job.category,
        type: job.job_type,
        publication_date: job.publication_date,
        candidate_required_location: job.candidate_required_location,
        salary: job.salary,
        description: job.description,
        url: job.url,
        company_logo: job.company_logo,
    }));

    return { jobs: mappedJobs, totalJobs, isFetching, isError };
    
}