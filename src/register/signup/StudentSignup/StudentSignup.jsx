import { NavLink, Outlet } from "react-router-dom"

function StudentSignup() {

    return (
        <div className="w-[78%] h-[640px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-[30px] h-[30px] rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
                    <div className="w-[70px] h-[2px] bg-gray-200 "></div>
                    <div className="w-[30px] h-[30px] rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">2</div>
                </div>
                <p className="text-sm text-gray-500 ">Shaxsiy ma'lumotlar</p>
            </div>
            <Outlet />
        </div >
    )
}

export default StudentSignup