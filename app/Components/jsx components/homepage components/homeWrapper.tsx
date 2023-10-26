
import { ReactNode } from "react"

interface HomeWrapper{
    children: ReactNode,
}

const HomeWrapper: React.FC<HomeWrapper> = ({children}) =>{
    return (
        <div className="w-full h-full bg-top bg-cover bg-[url('/images/3d-render-modern-low-poly-plexus-design.jpg')] " >
            {children}
        </div>
    )
}

export default HomeWrapper