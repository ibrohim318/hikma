// * aos
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ? icons 
import { LuBrain } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";
import { LuChartColumn } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { LuLeaf } from "react-icons/lu";

function Student() {
    useEffect(() => {
        AOS.init({
            duration: 500, // animatsiya vaqti
            once: true,     // faqat 1 marta ishlaydi
        });
    }, []);


    return (
        <div className="relative px-4 sm:px-6 lg:px-0">
            <center className="my-8 flex items-center justify-center gap-2">
                <LuBrain className="text-blue-700 font-semibold" />
                <h3 className="text-blue-700 font-semibold">Fikrlash — eng kuchli qurol</h3>
            </center>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

                {/* Card 1 */}
                <div
                    className="lg:col-span-4 w-full min-h-[320px] rounded-2xl bg-white
            shadow-md hover:shadow-2xl transition-all duration-300
            overflow-hidden cursor-pointer"
                    data-aos="fade-up"
                >
                    <div className="w-full h-[110px] sm:h-[120px] relative overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-700 p-5 sm:p-6 text-white">

                        <div className="absolute -left-4 -bottom-4 w-[70px] h-[70px] rounded-full bg-blue-600"></div>
                        <div className="absolute -right-5 -top-5 w-[90px] h-[90px] rounded-full bg-blue-500"></div>

                        <div className="relative z-10 flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl border-2 border-white/60 bg-blue-400 flex items-center justify-center">
                                <LuBrain size={24} />
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Fikrlash
                                </h3>

                                <span className="text-white/70 text-xs sm:text-sm">
                                    AI · Video · Interaktiv
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="bg-gray-50 rounded-2xl p-4 hover:bg-[#f0f0f4] transition">

                            <div className="flex items-start gap-3">

                                <div className="min-w-[40px] h-[40px] rounded-xl bg-yellow-100 flex items-center justify-center">
                                    <RiFireLine
                                        size={18}
                                        className="text-yellow-700"
                                    />
                                </div>

                                <div>
                                    <h1 className="text-sm sm:text-base font-medium">
                                        Fikrlashning operatsion sistemasi
                                    </h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                {/* Card 2 */}
                <div
                    className="lg:col-span-4 w-full min-h-[320px]
            rounded-2xl bg-white shadow-md
            hover:shadow-2xl transition-all overflow-hidden"
                    data-aos="fade-up"
                >
                    <div className="h-[110px] sm:h-[120px] relative overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-700 p-5 sm:p-6">

                        <div className="absolute -left-4 -bottom-4 w-[70px] h-[70px] rounded-full bg-purple-600"></div>

                        <div className="absolute -right-5 -top-5 w-[90px] h-[90px] rounded-full bg-purple-500"></div>

                        <div className="relative z-10 flex items-center gap-3">

                            <div className="w-11 h-11 rounded-xl bg-purple-600 border-2 border-white/60 flex items-center justify-center">
                                <GoBook size={24} className="text-white" />
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl text-white font-semibold">
                                    Ta'lim
                                </h3>

                                <span className="text-white/70 text-xs sm:text-sm">
                                    Reja · Statistika · Tahlil
                                </span>
                            </div>

                        </div>

                    </div>
                </div>


                {/* Card 3 */}
                <div
                    className="lg:col-span-4 w-full min-h-[320px]
            rounded-2xl bg-white shadow-md
            hover:shadow-2xl transition-all overflow-hidden"
                    data-aos="fade-up"
                >

                    <div className="h-[110px] sm:h-[120px] relative overflow-hidden bg-gradient-to-br from-orange-600 to-yellow-400 p-5 sm:p-6 text-white">

                        <div className="absolute -left-4 -bottom-4 w-[70px] h-[70px] rounded-full bg-[#e38800]"></div>

                        <div className="absolute -right-5 -top-5 w-[90px] h-[90px] rounded-full bg-[#f7a01a]"></div>

                        <div className="relative z-10 flex items-center gap-3">

                            <div className="w-11 h-11 rounded-xl bg-yellow-400 border-2 border-white/60 flex items-center justify-center">
                                <LuLeaf size={24} />
                            </div>

                            <div>
                                <h3 className="text-base sm:text-xl font-semibold">
                                    Qadriyatlar va shaxsiy rivojlanish
                                </h3>

                                <span className="text-white/70 text-xs sm:text-sm">
                                    Streak · Yutuq · Bog'lanish
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Student;