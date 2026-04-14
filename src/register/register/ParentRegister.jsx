// rrd
import { NavLink, Outlet, useLocation } from "react-router-dom";

//! icons
import { IoArrowBackSharp } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";


function ParentRegister() {
    const location = useLocation()

    return (
        <div className={`flex items-center justify-center ${location.pathname === "/parentRegister/parentLogin" ? "mt-[200px] transition-all duration-300" : "transition-all duration-300"}`}>
            <div className="mt-5 w-[30%]">
                {/* back icon & logo */}
                <div className="flex items-center justify-between cursor-pointer ">
                    <NavLink to={"/"} className="flex items-center gap-1.5 text-[#707082] hover:text-black/80   trasnsition-all duration-200">
                        <IoArrowBackSharp size={17} className="" />
                        <h3 className="">Orqaga</h3>
                    </NavLink>
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00a66f] to-[#00895e] flex items-center justify-center shadow-lg">
                            <LuBrain size={17} className="text-white" />
                        </div>
                        <h1 className=" font-[700] text-lg text-gray-800">Hikma</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParentRegister