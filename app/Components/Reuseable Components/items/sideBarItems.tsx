import { ReactNode } from "react"

interface BarItemProps{
    children: ReactNode
}

const BarItems:React.FC<BarItemProps> = ({children}) =>{
    return(
        <div className="text-skin-base w-full flex items-center gap-5">{children}</div>
    )
}
export default BarItems