import React from "react"
import NavbarComp from "./Navbar"

interface Props{
    children: any
}

const Layout: React.FC <Props> = ({children})=>{
    return(
        <>
        <NavbarComp/>
        <div className="mt-4">
            {children}
        </div>
        </>
    )
}

export default Layout;