import { request } from "@/service/api/request"
import { useQuery } from "@tanstack/react-query"
import { jobsKeys } from "./useJobsKeys"

export const useGetJobsQuery = () => { 
    return useQuery({
        queryKey: jobsKeys.list(),
        queryFn: () => request.get<any>('/remote-jobs'),
    })
}
export const useGetJobByIdQuery = (id: string) => { 
    return useQuery({
        queryKey: jobsKeys.detail(id),
        queryFn: () => request.get<any>(`/remote-jobs/${id}`),
    })
}