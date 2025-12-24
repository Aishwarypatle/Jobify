import { useAuth } from "@/service/auth-context"
import { redirect } from "next/navigation"
import { useEffect } from "react"

const ProtectedRoute = ({children}: any) => {
    const { user, isFetching}  = useAuth()
    useEffect(() => {
        if(!isFetching || !user ) {
            redirect("/login")
        }
    },[user, isFetching])

    if(isFetching) return null

    return children
}

export default ProtectedRoute