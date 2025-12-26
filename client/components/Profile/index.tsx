import { ProfileProps } from "@/types/entities"
import CustomModal from "../ui/Modal"
import ProfileCard from "./ProfileCard";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/slice/user";
import { toast } from "react-toastify";

const Profile = ({openProfile, setOpenProfile}: ProfileProps) => {
    const router = useRouter()
    const dispatch = useDispatch()

   const handleLogout = async () => {
        await toast.promise(
            new Promise<void>((resolve) => {
                localStorage.removeItem("token")
                resolve()
            }),
            {
                pending: "Logging out...",
                success: "User Logged Out Successfully",
                error: "Logout failed. Please try again.",
            }
        )

        dispatch(setUser(null))
        setOpenProfile(false)
        router.push("/jobs")
    }


    return (
        <CustomModal 
            open={openProfile}
            onClose={() => setOpenProfile(false)}
            title="Profile"
        >
            <ProfileCard user={openProfile} handleLogout={handleLogout}/>
        </CustomModal>
    )
}

export default Profile
