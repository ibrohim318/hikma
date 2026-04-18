import { Outlet } from "react-router-dom"

function ParentSignup() {
    return (
        <div className="w-[78%] h-[640px]  ">
            <Outlet />
        </div >
    )
}

export default ParentSignup