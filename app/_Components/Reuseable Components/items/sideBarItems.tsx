import { ReactNode } from "react"

interface BarItemProps{
    children: ReactNode
    className?: string
}

const BarItems:React.FC<BarItemProps> = ({children, className}) =>{
    return(
        <div className={`text-skin-base w-full ${className} flex items-center gap-1 md:gap-5`}>{children}</div>
    )
}
export default BarItems