import { NavLink, Outlet } from "react-router-dom";

import { LuBrain } from "react-icons/lu";

function StudentThinking() {



    return (
        <div className="w-full bg-white  border-gray-200 ">
            <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center"><LuBrain className="text-[22px]" /></div>
                {/* Text */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Tafakkur</h1>
                    <p className="text-sm text-gray-500 mt-1">Fikrlash jarayonini ko'rish · Tahlil · Feedback · O'sish</p>
                </div>
            </div>
            {/* choos options */}
            <div className="my-4 flex flex-wrap gap-3 ">
                <NavLink end to="" className={({ isActive }) => `px-5 py-1.5 rounded-xl border text-[13px] font-semibold transition-all duration-300 ${isActive ? "bg-violet-500 text-white border-violet-500 shadow-lg shadow-violet-100" : "bg-white text-slate-500 border-gray-200 hover:border-gray-300"}`}>Mantiqiy Fikrlash</NavLink>
                <NavLink to="creativeThinking" className={({ isActive }) => `px-6 py-1.5 rounded-xl border text-[13px] font-semibold transition-all duration-300 ${isActive ? "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-100" : "bg-white text-slate-500 border-gray-200 hover:border-gray-300"}`}>Ijodiy Fikrlash</NavLink>
                <NavLink to="reasonThinking" className={({ isActive }) => `px-6 py-1.5 rounded-xl border text-[13px] font-semibold transition-all duration-300 ${isActive ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-100" : "bg-white text-slate-500 border-gray-200 hover:border-gray-300"}`}>Sabab-Oqibat</NavLink>
                <NavLink to="askQuestion" className={({ isActive }) => `px-6 py-1.5 rounded-xl border text-[13px] font-semibold transition-all duration-300 ${isActive ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-100" : "bg-white text-slate-500 border-gray-200 hover:border-gray-300"}`}>Savol Berish</NavLink>
                <NavLink to="conclusion" className={({ isActive }) => `px-6 py-1.5 rounded-xl border text-[13px] font-semibold transition-all duration-300 ${isActive ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-100" : "bg-white text-slate-500 border-gray-200 hover:border-gray-300"}`}>Xulosa Chiqarish</NavLink>
            </div>

            {/* options */}
            <div><Outlet /></div>
        </div>
    );
}

export default StudentThinking;