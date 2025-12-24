import { useAuth } from "@/service/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const ProtectedRoute = ({ children }: any) => {
    const { user, isFetching } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isFetching && !user) {
            router.push("/login")
        }
    }, [user, isFetching, router])

    if (isFetching) return null

    return children
}

export default ProtectedRoute