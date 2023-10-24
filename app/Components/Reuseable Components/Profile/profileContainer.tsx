import { ReactNode } from "react"


interface ProfileContainerProps{
    children: ReactNode
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({children}) =>{
    return (
        <div className=" flex gap-3 justify-center items-center">
            {children}
        </div>
    )
}

export default ProfileContainer