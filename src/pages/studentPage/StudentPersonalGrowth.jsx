import axios from "axios";

import { NavLink, Outlet } from "react-router-dom";

import { MdOutlineTrendingUp } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaStar, FaBullseye, FaComments } from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi";


function StudentPersonalGrowth() {
    const navClass = ({ isActive }) =>
        `px-5 py-1.5 rounded-full border transition-all flex items-center gap-2
    ${isActive
            ? "bg-emerald-500 text-white border-emerald-500"
            : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
        }`;

    return (
        <div className="">
            <div className="flex items-center gap-2">
                <MdOutlineTrendingUp className="text-2xl text-green-700" />
                <h1 className="text-xl font-bold"> Shaxsiy O'sish</h1>
            </div>
            <p className="text-gray-500 mt-1 text-xs">Ko'nikma · Intizom · Maqsad · Yo'nalish</p>
            <div className="flex flex-wrap gap-3 mt-5">
                <NavLink end to="" className={navClass}><PiStudent size={18} />O'zini Anglash</NavLink>
                <NavLink to="skills" className={navClass}> <FaStar size={15} /> Ko'nikmalar</NavLink>
                <NavLink to="discipline" className={navClass}><IoFlashOutline size={18} />Intizom</NavLink>
                <NavLink to="goals" className={navClass}><FaBullseye size={15} />Maqsadlar</NavLink>
                <NavLink to="careerGuidance" className={navClass}><MdOutlineWorkOutline size={18} />Kasbga Yo'nalish</NavLink>
                <NavLink to="parentCommunication" className={navClass}><FaComments size={15} />Ota-ona Muloqoti</NavLink>
                <NavLink to="selfAssessment" className={navClass}><HiOutlineChartBar size={18} />O'zini Baholash</NavLink>


            </div>
            <div className="mt-6">
                <Outlet />
            </div>
        </div>
    );
}

export default StudentPersonalGrowth;