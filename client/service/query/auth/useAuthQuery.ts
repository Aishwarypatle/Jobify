import { authRequest, request } from "@/service/api/request"
import { useMutation, useQuery } from "@tanstack/react-query"
import { authKeys } from "./useAuthKeys"
import { LoginPayload, RegisterPayload } from "@/types/service"


export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) =>
      authRequest.post("/login", payload),
  })
}

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: authKeys.register(),
    mutationFn: (payload: RegisterPayload) =>
      authRequest.post('/signup', payload),
  })
}
// export const useGetJobByIdQuery = (id: string) => { 
//     return useQuery({
//         queryKey: authKeys.detail(id),
//         queryFn: () => request.get<any>(`/remote-jobs/${id}`),
//     })
// }