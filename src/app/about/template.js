"use client"

import { usePathname } from "next/navigation"

export default function Template({children}){
    const pathname = usePathname()
    console.log(pathname)
    return(
        <div>
            <h3 style={pathname == "/about/vision"? {color: "red"} : {color: "aqua"}}>this is a template</h3>
            {children}
            <p className={pathname ==  "/about/vision"? " text-red-500" :  "text-green-500"}>{pathname}</p>
        </div>
    )
}