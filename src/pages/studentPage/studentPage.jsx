import { deleteCookie } from "../../utils/cookie";
import { useAuth } from "../../context/AuthContext";

// rrd
import { Outlet, NavLink } from "react-router-dom";


// icons
import { LuLayoutDashboard } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdCalendarMonth } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { LuTrophy } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

function StudentPage() {
    const { userName, lastName, userPhone } = useAuth();
    const initials = `${userName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    // logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        deleteCookie("token");
        window.location.href = "/";
    };





    return (
        <div className="flex w-[100%] min-h-screen">

            {/* Sidebar */}
            <div className="h-screen w-[17%] sticky top-0 border-r border-gray-200 flex flex-col  gap-6">
                {/* Logo */}
                <div className="flex items-center gap-3 px-5 pt-5">
                    <div className="w-[37px] h-[37px] bg-blue-500 rounded-xl flex items-center justify-center"><LuBrain className="text-xl text-white" /></div>
                    <div>
                        <h1 className="font-bold text-lg">IDROK</h1>
                        <p className="text-sm text-gray-500">Platform</p>
                    </div>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-2 px-4 py-4">
                    <NavLink to="/studentPage" end className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}> <LuLayoutDashboard className="text-[20px]" /><span>Dashboard</span></NavLink>

                    <NavLink to="/studentPage/studentThought" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}> <LuBrain className="text-[20px]" /> <span>Fikrlash</span></NavLink>

                    <NavLink to="/studentPage/studentSchool" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}  > <IoBookOutline className="text-[20px]" /> <span>Maktab</span> </NavLink>

                    <NavLink to="/studentPage/studentCourse" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`} > <HiOutlineAcademicCap className="text-[20px]" /> <span>Kurs</span> </NavLink>

                    <NavLink to="/studentPage/studentAgenda" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}  >  <MdCalendarMonth className="text-[20px]" /> <span>Kun tartibi</span> </NavLink>

                    <NavLink to="/studentPage/studentMercy" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`}  > <FaRegStar className="text-[20px]" />  <span>Qadriyatlar</span>  </NavLink>

                    <NavLink to="/studentPage/studentConnection" className={({ isActive }) => `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200" : "text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900"}`} > <BsFillPersonPlusFill className="text-[20px]" /> <span>Ulanishlar</span>  </NavLink>
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
            <div className=" p-6">
                <Outlet />
            </div>

        </div>
    );
}

export default StudentPage;



