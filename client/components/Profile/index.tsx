import { ProfileProps } from "@/types/entities"
import CustomModal from "../ui/Modal"
import ProfileCard from "./ProfileCard";
import { useRouter } from "next/navigation";

const Profile = ({openProfile, setOpenProfile, user}: ProfileProps) => {
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push("/jobs")
    }

    return (
        <CustomModal 
            open={openProfile}
            onClose={() => setOpenProfile(false)}
            title="Profile"
        >
            <ProfileCard user={user} handleLogout={handleLogout}/>
        </CustomModal>
    )
}

export default Profile
