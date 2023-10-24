'use client'

import { useState } from "react";

interface useActiveProps{
    
    handleChange: ( value: number) => void;
    value: number;
}

const useActive = ( initialState: number ) : useActiveProps =>{

    const [value, setValue] = useState(initialState)

    const handleChange = (value: number) =>{
        setValue(value)
    }
    return { value, handleChange}
}

export default useActive