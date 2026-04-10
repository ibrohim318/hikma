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


function Student() {
    useEffect(() => {
        AOS.init({
            duration: 500, // animatsiya vaqti
            once: true,     // faqat 1 marta ishlaydi
        });
    }, []);


    return (
        <div>
            <center className="my-8 flex items-center justify-center gap-2">
                <LuBrain className="text-blue-700 font-semibold" />
                <h3 className="text-blue-700 font-semibold">Bilim izlash — eng oliy maqsad</h3>
            </center>
            <div className="relative">
                <div className="grid grid-cols-12 gap-5 ">
                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-700 p-6 text-white">
                            <div className="absolute -left-3 -bottom-3 w-[70px] h-[70px] rounded-full bg-blue-600"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-blue-500"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-blue-400 flex items-center justify-center">
                                    <LuBrain size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Aqlli O'rganish</h3>
                                <span className="text-white/70 text-xs font-semibold">AI · Video · Interaktiv</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-blue-100 flex items-center justify-center">
                                        <LuBrain size={18} className="text-blue-700" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">AI yordamida o'rganish</h1>
                                        <p className="text-sm text-gray-500">Har bir mavzuni AI bilan muhokama qiling, <br /> savol bering va tushunib oling</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-blue-100 flex items-center justify-center">
                                        <GoBook size={18} className="text-blue-700" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Video darslar & Fikrlash moduli</h1>
                                        <p className="text-xs text-gray-500">Sifatli video kontent, interaktiv darslar va aqliy mashqlar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-700 p-6 ">
                            <div className="absolute -left-3 -bottom-3 w-[70px] h-[70px] rounded-full bg-purple-600"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-purple-500"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-purple-600 flex items-center justify-center">
                                    <LuChartColumn size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Shaxsiy O'sish</h3>
                                <span className="text-white/70 text-xs font-semibold">Reja · Statistika · Tahlil</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-purple-100 flex items-center justify-center">
                                        <CiCalendar size={18} className="text-purple-700" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Kun tartibi rejalashtirish</h1>
                                        <p className="text-sm text-gray-500">Avtomatik va qo'lda rejalashtirish — <br /> vaqtingizni samarali boshqaring</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-purple-100 flex items-center justify-center">
                                        <LuChartColumn size={18} className="text-purple-700" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Shaxsiy progress statistikasi</h1>
                                        <p className="text-xs text-gray-500">Fan bo'yicha natijalar grafigi va o'sish <br /> dinamikasini kuzating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-orange-600 to-yellow-400 p-6 text-white">
                            <div className="absolute -left-4 -bottom-4 w-[70px] h-[70px] rounded-full bg-[#e38800]"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-[#f7a01a]"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-yellow-400 flex items-center justify-center">
                                    <RiFireLine size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Motivatsiya & Aloqa</h3>
                                <span className="text-white/70 text-xs font-semibold">Streak · Yutuq · Bog'lanish</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-yellow-100 flex items-center justify-center">
                                        <RiFireLine size={18} className="text-yellow-700" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">AI yordamida o'rganish</h1>
                                        <p className="text-sm text-gray-500">Har bir mavzuni AI bilan muhokama qiling, <br /> savol bering va tushunib oling</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-yellow-100 flex items-center justify-center">
                                        <MdOutlinePeopleAlt size={18} className="text-yellow-700" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Video darslar & Fikrlash moduli</h1>
                                        <p className="text-xs text-gray-500">Sifatli video kontent, interaktiv darslar va aqliy mashqlar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;