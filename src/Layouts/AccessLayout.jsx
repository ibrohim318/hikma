import { LuBrain } from "react-icons/lu";
import { FaRegCheckCircle, FaLongArrowAltRight } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

function AccessLayout() {
    const navigate = useNavigate();

    return (
        <div className="px-4 sm:px-6 md:px-8 my-6 sm:my-8 lg:my-10">
            {/* Grid: 1 col on sm, 1 col on md (centered), 3 col on lg */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">

                {/* Student */}
                <NavLink to="/" className="flex justify-center">
                    {({ isActive }) => (
                        <div className={`
                            w-full max-w-sm md:max-w-none
                            h-auto sm:h-[260px]
                            border rounded-xl
                            flex flex-col
                            transition-all duration-300
                            ${isActive
                                ? "border-blue-300 border-t-[4px] border-t-blue-600"
                                : "border-gray-200 border-t-[4px] border-t-gray-200"}
                        `}>
                            <div className="m-4 sm:m-5 lg:m-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                                        <LuBrain size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs sm:text-sm text-blue-500 font-medium">O'quvchi</h3>
                                        <h1 className="text-base sm:text-lg font-semibold">Izlanuvchi</h1>
                                    </div>
                                </div>
                                {isActive && (
                                    <div className="w-[21px] h-[21px] rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                        <FaRegCheckCircle size={13} className="text-white" />
                                    </div>
                                )}
                            </div>

                            <div className="mx-4 sm:mx-5 lg:mx-6 space-y-2 flex-1">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">AI yordamida chuqur o'rganish</h1>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">Video darslar va Fikrlash moduli</h1>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">Kun tartibi rejalashtirish</h1>
                                </div>
                            </div>

                            <button
                                onClick={(e) => { e.preventDefault(); navigate("/studentRegister"); }}
                                className="flex items-center justify-center gap-2 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] px-3 py-2.5 bg-gradient-to-r from-sky-500 to-blue-700 text-white mt-4 mb-4 sm:mb-5 mx-4 sm:mx-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer text-sm sm:text-base hover:opacity-90 active:scale-95"
                            >
                                Kirish <FaLongArrowAltRight />
                            </button>
                        </div>
                    )}
                </NavLink>

                {/* Parent */}
                <NavLink to="/parent" className="flex justify-center">
                    {({ isActive }) => (
                        <div className={`
                            w-full max-w-sm md:max-w-none
                            h-auto sm:h-[260px]
                            border rounded-xl
                            flex flex-col
                            transition-all duration-300
                            ${isActive
                                ? "border-green-300 border-t-[4px] border-t-green-600"
                                : "border-gray-200 border-t-[4px] border-t-gray-200"}
                        `}>
                            <div className="m-4 sm:m-5 lg:m-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                                        <LuBrain size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs sm:text-sm text-green-500 font-medium">Ota yoki Ona</h3>
                                        <h1 className="text-base sm:text-lg font-semibold">Ota-ona</h1>
                                    </div>
                                </div>
                                {isActive && (
                                    <div className="w-[21px] h-[21px] rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                                        <FaRegCheckCircle size={13} className="text-white" />
                                    </div>
                                )}
                            </div>

                            <div className="mx-4 sm:mx-5 lg:mx-6 space-y-2 flex-1">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">Real vaqtda faollik kuzatuvi</h1>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">O'rganish grafiklari</h1>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">Muhim bildirishnomalar</h1>
                                </div>
                            </div>

                            <button
                                onClick={(e) => { e.preventDefault(); navigate("/parentRegister"); }}
                                className="flex items-center justify-center gap-2 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] px-3 py-2.5 bg-gradient-to-r from-[#00bc7d] to-[#007a6f] text-white mt-4 mb-4 sm:mb-5 mx-4 sm:mx-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer text-sm sm:text-base hover:opacity-90 active:scale-95"
                            >
                                Kirish <FaLongArrowAltRight />
                            </button>
                        </div>
                    )}
                </NavLink>

                {/* Teacher */}
                <NavLink to="/teacher" className="flex justify-center">
                    {({ isActive }) => (
                        <div className={`
                            w-full max-w-sm md:max-w-none
                            h-auto sm:h-[260px]
                            border rounded-xl
                            flex flex-col
                            transition-all duration-300
                            ${isActive
                                ? "border-purple-300 border-t-[4px] border-t-purple-600"
                                : "border-gray-200 border-t-[4px] border-t-gray-200"}
                        `}>
                            <div className="m-4 sm:m-5 lg:m-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                                        <LuBrain size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs sm:text-sm text-purple-500 font-medium">Ustoz</h3>
                                        <h1 className="text-base sm:text-lg font-semibold">Ustoz</h1>
                                    </div>
                                </div>
                                {isActive && (
                                    <div className="w-[21px] h-[21px] rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                                        <FaRegCheckCircle size={13} className="text-white" />
                                    </div>
                                )}
                            </div>

                            <div className="mx-4 sm:mx-5 lg:mx-6 space-y-2 flex-1">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">O'quvchilar ro'yxati va boshqaruvi</h1>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">Sinf natijalari tahlili</h1>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                                    <h1 className="text-gray-500 text-xs sm:text-sm">Zaif tomonlarni aniqlash</h1>
                                </div>
                            </div>

                            <button
                                onClick={(e) => { e.preventDefault(); navigate("/teacherRegister"); }}
                                className="flex items-center justify-center gap-2 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] px-3 py-2.5 bg-gradient-to-r from-[#8d4dff] to-[#8200db] text-white mt-4 mb-4 sm:mb-5 mx-4 sm:mx-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer text-sm sm:text-base hover:opacity-90 active:scale-95"
                            >
                                Kirish <FaLongArrowAltRight />
                            </button>
                        </div>
                    )}
                </NavLink>

            </div>
        </div>
    );
}

export default AccessLayout;