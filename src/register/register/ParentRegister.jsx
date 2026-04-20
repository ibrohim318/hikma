// rrd
import { NavLink, Outlet } from "react-router-dom";

//! icons
import { IoArrowBackSharp } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";


function ParentRegister() {


    return (
        <div className="relative grid grid-cols-12 h-screen overflow-hidden">
            <div className="col-span-6 h-full hidden lg:block">
                <div className="w-full h-full relative overflow-hidden">

                    {/* BG IMAGE */}
                    <img
                        src="/parentSignup.jpg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* MAIN GRADIENT (eng muhim qism) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#468072]/80 via-[#619a96]/70 to-[#3a7659]/80" />

                    {/* LIGHT PATTERN */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">

                        {/* TOP */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                ✦
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold">Hikma</h1>
                                <p className="text-xs opacity-80 tracking-wide">
                                    TA'LIM PLATFORMASI
                                </p>
                            </div>
                        </div>

                        {/* BOTTOM */}
                        <div className="max-w-md mb-[130px] ">
                            <div className="w-10 h-[3px] bg-white/40 mb-5"></div>
                            <h2 className="text-4xl font-bold leading-tight">Farzand tarbiyasi —<br />kelajak asosi</h2>
                            <p className="mt-4 text-sm opacity-80 leading-relaxed">
                                Har bir o‘rganilgan dars, har bir topilgan javob
                                kelajagingni poydevori.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Signup & login */}
            <div className={`col-span-6 flex items-center justify-center `}>
                <div className="mt-4 w-[80%]">
                    {/* back icon & logo */}
                    <div className="cursor-pointer ">
                        <NavLink to={"/"} className="flex items-center gap-1.5 text-[#707082] hover:text-black/80   trasnsition-all duration-200">
                            <IoArrowBackSharp size={17} className="" />
                            <h3 className="">Orqaga</h3>
                        </NavLink>
                    </div>

                    <div className="my-5">
                        <h1 className="text-2xl font-bold mt-2.5">Ro'yxatdan o'tish</h1>
                        <p className="text-sm text-gray-400 ">Farzandingizni kuzatishni boshlang</p>
                    </div>

                    {/* signup & login */}
                    <div className="mt-15 my-5 w-[55%] h-[44px] bg-[#ececf0] rounded-xl flex items-center justify-between ">
                        <NavLink to="/parentRegister" end className={({ isActive }) => `w-[50%] h-[36px] mx-1 flex items-center justify-center rounded-xl ${isActive ? "bg-white transition-all duration-200" : "bg-transparent transition-all duration-200"}`}>
                            <h1 className="text-black font-normal">Ro'yxatdan o'tish</h1>
                        </NavLink>
                        <NavLink to={"/parentLogin"} end className={({ isActive }) => `w-[50%] h-[36px] mx-1 flex items-center justify-center rounded-xl ${isActive ? "bg-white transition-all duration-200" : "bg-transparent transition-all duration-200"}`}>
                            <h1 className="text-black font-normal">Kirish</h1>
                        </NavLink>
                    </div>

                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParentRegister