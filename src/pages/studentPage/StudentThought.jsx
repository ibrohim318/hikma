import { NavLink, Outlet } from "react-router-dom";

import { LuWrench } from "react-icons/lu";
import { PiArrowRightThin } from "react-icons/pi";


function studentThought() {
    return (
        <div className="p-3">
            <div>
                <div className="flex items-center gap-2">
                    <LuWrench className="text-[#8730fe] text-xl" />
                    <h1 className="text-xl font-semibold">Fikrlash Vositalari</h1>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-400">Muammo</p>
                    <PiArrowRightThin className="text-gray-500 text-md" />
                    <p className="text-sm text-gray-400">Vosita </p>
                    <PiArrowRightThin className="text-gray-500 text-lg" />
                    <p className="text-sm text-gray-400">Tahlil </p>
                    <PiArrowRightThin className="text-gray-500 text-lg" />
                    <p className="text-sm text-gray-400">Xulosa</p>
                </div>
            </div>

            {/* thinkinng options */}
            <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full my-6 gap-4">

                <NavLink
                    to=""
                    end
                    className={({ isActive }) =>
                        `group h-[45px] rounded-2xl border backdrop-blur-sm flex items-center justify-center
            transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1
            ${isActive
                            ? "bg-[#8b6af2] border-[#8b6af2] shadow-purple-200"
                            : "bg-white/70 border-gray-200 hover:border-[#8b6af2]"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <span className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700 group-hover:text-[#8b6af2]"}`}>
                            SWOT
                        </span>
                    )}
                </NavLink>

                <NavLink
                    to="studentFiveWhy"
                    className={({ isActive }) =>
                        `group h-[45px] rounded-2xl border backdrop-blur-sm flex items-center justify-center
            transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1
            ${isActive
                            ? "bg-[#8b6af2] border-[#8b6af2] shadow-purple-200"
                            : "bg-white/70 border-gray-200 hover:border-[#8b6af2]"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <span className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700 group-hover:text-[#8b6af2]"}`}>
                            5 Nima Uchun
                        </span>
                    )}
                </NavLink>

                <NavLink
                    to="studentPareto"
                    className={({ isActive }) =>
                        `group h-[45px] rounded-2xl border backdrop-blur-sm flex items-center justify-center
            transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1
            ${isActive
                            ? "bg-[#8b6af2] border-[#8b6af2] shadow-purple-200"
                            : "bg-white/70 border-gray-200 hover:border-[#8b6af2]"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <span className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700 group-hover:text-[#8b6af2]"}`}>
                            Pareto 80/20
                        </span>
                    )}
                </NavLink>



                <NavLink
                    to="studentPDSA"
                    className={({ isActive }) =>
                        `group h-[45px] rounded-2xl border backdrop-blur-sm flex items-center justify-center
            transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1
            ${isActive
                            ? "bg-[#8b6af2] border-[#8b6af2] shadow-purple-200"
                            : "bg-white/70 border-gray-200 hover:border-[#8b6af2]"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <span className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700 group-hover:text-[#8b6af2]"}`}>
                            PDCA
                        </span>
                    )}
                </NavLink>

            </div>

            <div><Outlet /></div>
        </div>
    )
}

export default studentThought 