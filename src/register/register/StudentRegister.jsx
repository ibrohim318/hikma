// rrd
import { NavLink, Outlet } from "react-router-dom";

//! icons
import { IoArrowBackSharp } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";


function StudentSugnup() {


    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

            {/* LEFT SIDE */}
            <div className="hidden lg:col-span-6 lg:flex relative">

                <img
                    src="/signup.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-indigo-500/70 to-purple-500/80" />

                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">

                    {/* logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex justify-center items-center">
                            ✦
                        </div>

                        <div>
                            <h1 className="font-bold text-xl">
                                Hikma
                            </h1>

                            <p className="text-xs opacity-80 tracking-widest">
                                TA'LIM PLATFORMASI
                            </p>
                        </div>
                    </div>

                    {/* text */}
                    <div className="max-w-md mb-28">

                        <div className="w-10 h-1 rounded-full bg-white/40 mb-5" />

                        <h2 className="text-5xl font-bold leading-tight">
                            Bilim —
                            <br />
                            eng buyuk boylik
                        </h2>

                        <p className="mt-5 text-sm leading-7 opacity-80">
                            Har bir o‘rganilgan dars va topilgan javob
                            kelajaging poydevoridir.
                        </p>

                    </div>

                </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="col-span-12 lg:col-span-6 flex justify-center">
                <div className=" w-full max-w-lg px-5 sm:px-8 py-6 lg:py-10">

                    {/* top */}
                    <div className="flex justify-between items-center">
                        <NavLink to="/" className="flex items-center gap-2 text-gray-500 hover:text-black transition"> <IoArrowBackSharp size={18} /> <span>Orqaga</span></NavLink>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                <LuBrain size={22} className="text-white" />
                            </div>
                            <div>
                                <h1 className="font-bold">Hikma</h1>
                                <p className="text-xs text-gray-500">Ta'lim Platformasi</p>
                            </div>
                        </div>
                    </div>


                    {/* title */}
                    <div className="mt-10">
                        <h1 className=" text-3xl sm:text-4xl font-bold">Ro'yxatdan o'tish</h1>
                        <p className="mt-2 text-gray-400 text-sm">Yangi hisob yarating va o‘rganishni boshlang</p>
                    </div>

                    {/* tabs */}
                    <div className=" mt-8 h-[45px] p-1 w-[80%] bg-gray-100 rounded-2xl flex">
                        <NavLink to="/studentregister" end className={({ isActive }) => `w-1/2 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-white shadow-md" : ""}`}>Ro'yxatdan o'tish</NavLink>
                        <NavLink to="/studentLogin" end className={({ isActive }) => `w-1/2 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-white shadow-md" : ""}`}>Kirish</NavLink>
                    </div>

                    <div className="mt-7">
                        <Outlet />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default StudentSugnup

