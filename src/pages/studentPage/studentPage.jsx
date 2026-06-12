import { deleteCookie } from "../../utils/cookie";
import { useAuth } from "../../context/AuthContext";

// icons
import { LuLayoutDashboard } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { AiOutlineTool } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdCalendarMonth } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { LuTrophy } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiFocus2Line } from "react-icons/ri";
import { MdOutlineTrendingUp } from "react-icons/md";


// react & rrd
import { useReducer, useEffect } from "react";
import { Outlet, NavLink, useLocation, data } from "react-router-dom";

// useReducerx
const initialState = {
    title: "Asosiy panel"
};

function reducer(state, action) {
    switch (action.type) {
        case "Dashboard": return { title: "Asosiy panel" };
        case "Fikrlash": return { title: "Fikrlash Vositalari" };
        case "Shaxsiy O'sish": return { title: "Shaxsiy O'sish" };

        default: return state
    }
}

function StudentPage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case "/studentPage": dispatch({ type: "Dashboard" }); break;
            case "/studentPage/studentThought": dispatch({ type: "Fikrlash" }); break;
            case "/studentPage/StudentThinking": dispatch({ type: "Fokus" }); break;
            case "/studentPage/StudentPersonalGrowth": dispatch({ type: "Shaxsiy O'sish" }); break;
        }
    }, [location.pathname])


    const { userName, lastName, userPhone } = useAuth();
    const initials = `${userName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    // logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        deleteCookie("token");
        window.location.href = "/";
    };
    console.log(localStorage.setItem("lastName", "Rahmatullayev"));
    console.log(localStorage.setItem("phone", "901234567"))


    fetch("http://64.23.232.25:8000/personal-growth/self-awareness/questions")
        .then(data => data.json())
        .then(data => console.log(data))
    return (
        <div className="flex w-[100%] min-h-screen">
            {/* Sidebar */}
            <div className="min-h-screen w-[17%] sticky top-0 border-r border-gray-200 flex flex-col  gap-6 h-screen overflow-hidden">
                {/* Logo */}
                <div className="flex items-center gap-3 px-5 pt-5">
                    <div className="w-[37px] h-[37px] bg-blue-500 rounded-xl flex items-center justify-center"><LuBrain className="text-xl text-white" /></div>
                    <div>
                        <h1 className="font-bold text-lg">Hikma</h1>
                        <p className="text-sm text-gray-500">Platform</p>
                    </div>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-2 px-4 py-4">
                    <NavLink to="/studentPage" end className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}> <LuLayoutDashboard className="text-[20px]" /><span>Asosiy panel</span></NavLink>
                    <NavLink to="/studentPage/StudentThinking" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}  > <LuBrain className="text-[20px]" /> <span>Tafakkur</span> </NavLink>
                    <NavLink to="/studentPage/studentThought" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}> <AiOutlineTool className="text-[20px]" /> <span>Fikrlash Vositalari</span></NavLink>
                    <NavLink to="/studentPage/StudentPersonalGrowth" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}> <MdOutlineTrendingUp className="text-[20px]" /> <span>Shaxsiy O'sish</span></NavLink>
                </nav>

                {/* Logout */}
                <div className="mt-auto border-t border-gray-200 h-[70px] p-2 mb-2">
                    <div className="w-full h-[55px] rounded-lg p-2.5 transition-all duration-200 hover:bg-gray-100 flex items-center justify-between">
                        <div className="w-[40px] h-[40px] bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">{initials}</div>
                        <div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <h3>{userName}</h3>
                                <h3>{lastName}</h3>
                            </div>
                            <p className="text-sm text-gray-400">+998 {userPhone}</p>
                        </div>
                        <button onClick={handleLogout} className="text-red-500 text-md w-[25px] h-[25px] flex items-center justify-center rounded-md hover:bg-red-200 transition-all duration-200"><LuLogOut className="" /></button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 h-screen flex flex-col overflow-hidden">
                {/* Header */}
                <div className="h-[70px] border-b border-gray-200 py-3 px-5 flex items-center justify-between shrink-0">
                    <div>
                        <h1 className="font-semibold">{state.title}</h1>
                        <p className="text-gray-400 text-xs font-thin">Izlanuvchi Paneli</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-[33px] h-[33px] rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-all duration-150 cursor-pointer">
                            <FaRegBell className="text-gray-600" />
                        </div>

                        <div className="w-[35px] h-[35px] bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                            {initials}
                        </div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </div>

            </div>

        </div>
    );
}

export default StudentPage;



