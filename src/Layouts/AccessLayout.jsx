import { LuBrain } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


import { NavLink, Link } from "react-router-dom";



function AccessLayout() {
    return (
        <div className="grid grid-cols-12 gap-4 my-10">

            <NavLink to="/" className="col-span-4" >
                {({ isActive }) => (
                    <div className={`w-full h-[260px] border border-gray-300 rounded-xl border${isActive ? "border-blue-300 border-t-[4px] border-t-blue-600" : "border-gray-200 border-t-[4px] border-t-gray-200"}`}>
                        <div className="m-6 flex items-center justify-between">
                            {/* left */}
                            <div className="flex items-center gap-2">
                                <div className="w-[45px] h-[45px] rounded-lg bg-blue-600 flex items-center justify-center">
                                    <LuBrain size={25} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm text-blue-500 font-medium">O'quvchi</h3>
                                    <h1 className="text-lg font-semibold">Izlanuvchi</h1>
                                </div>
                            </div>

                            {/* right */}
                            {isActive && (<div className="w-[21px] h-[21px] rounded-full bg-blue-600 flex items-center justify-center">
                                <FaRegCheckCircle size={13} className="text-white" />
                            </div>
                            )}
                        </div>

                        <div className="mx-6 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">AI yordamida chuqur o'rganish</h1>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">Video darslar va Fikrlash moduli</h1>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">Kun tartibi rejalashtirish</h1>
                            </div>
                        </div>

                        <Link to={"/studentRegister"} className="flex items-center justify-center gap-2 w-[250px] px-3 py-2.5  bg-gradient-to-r from-sky-500 to-blue-700  text-white my-5 mx-6 rounded-xl shadow-lg   transition-all duration-300 cursor-pointer">Kirish <FaLongArrowAltRight /></Link>
                    </div>
                )}
            </NavLink>

            <NavLink to="/parent" className="col-span-4">
                {({ isActive }) => (
                    <div className={`w-full h-[260px] border border-gray-300 rounded-xl border${isActive ? "border-blue-300 border-t-[4px] border-t-green-600" : "border-gray-200 border-t-[4px] border-t-gray-200"}`}>
                        <div className="m-6 flex items-center justify-between">
                            {/* left */}
                            <div className="flex items-center gap-2">
                                <div className="w-[45px] h-[45px] rounded-lg bg-green-600 flex items-center justify-center">
                                    <LuBrain size={25} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm text-green-500 font-medium">Ota yoki Ona</h3>
                                    <h1 className="text-lg font-semibold">Ota-ona</h1>
                                </div>
                            </div>

                            {/* right */}
                            {isActive && (<div className="w-[21px] h-[21px] rounded-full bg-green-600 flex items-center justify-center">
                                <FaRegCheckCircle size={13} className="text-white" />
                            </div>
                            )}
                        </div>

                        <div className="mx-6 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">Real vaqtda faollik kuzatuvi</h1>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">O'rganish grafiklari</h1>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">Muhim bildirishnomalar</h1>
                            </div>
                        </div>

                        <Link to={"/parentRegister"} className=" flex items-center justify-center gap-2 w-[250px] px-3 py-2 bg-gradient-to-r from-[#00bc7d] to-[#007a6f]  text-white my-5 mx-6 rounded-xl shadow-lg   transition-all duration-300 cursor-pointer">
                            Kirish <FaLongArrowAltRight />
                        </Link>
                    </div>
                )}
            </NavLink>

            <NavLink to="/teacher" className="col-span-4">
                {({ isActive }) => (
                    <div className={`w-full h-[260px] border border-gray-300 rounded-xl border${isActive ? "border-blue-300 border-t-[4px] border-t-purple-600" : "border-gray-200 border-t-[4px] border-t-gray-200"}`}>
                        <div className="m-6 flex items-center justify-between">
                            {/* left */}
                            <div className="flex items-center gap-2">
                                <div className="w-[45px] h-[45px] rounded-lg bg-purple-600 flex items-center justify-center">
                                    <LuBrain size={25} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm text-purple-500 fonFt-medium">Ustoz</h3>
                                    <h1 className="text-lg font-semibold">Ustoz</h1>
                                </div>
                            </div>

                            {/* right */}
                            {isActive && (<div className="w-[21px] h-[21px] rounded-full bg-purple-600 flex items-center justify-center">
                                <FaRegCheckCircle size={13} className="text-white" />
                            </div>
                            )}
                        </div>
                        <div className="mx-6 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">O'quvchilar ro'yxati va boshqaruvi</h1>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">Sinf natijalari tahlili</h1>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                                <h1 className="text-gray-500 text-sm">Zaif tomonlarni aniqlash</h1>
                            </div>
                        </div>

                        <Link to={"/teacherRegister"} className="flex items-center justify-center gap-2 w-[250px] px-3 py-2  bg-gradient-to-r from-[#8d4dff] to-[#8200db]  text-white my-5 mx-6 rounded-xl shadow-lg   transition-all duration-300 cursor-pointer">
                            Kirish <FaLongArrowAltRight />
                        </Link>
                    </div>
                )}
            </NavLink>
        </div>

    )
}

export default AccessLayout

