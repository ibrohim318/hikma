// * aos
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


// ? icons 
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";

function Parent() {
    useEffect(() => {
        AOS.init({
            duration: 500, // animatsiya vaqti
            once: true,     // faqat 1 marta ishlaydi
        });
    }, []);


    return (
        <div>
            <center className="my-8 flex items-center justify-center gap-2">
                <MdOutlinePeopleAlt className="text-green-700 font-semibold" />
                <h3 className="text-green-700 font-semibold">Farzandingiz muvaffaqiyati — sizning quvonchingiz</h3>
            </center>
            <div className="relative">
                <div className="grid grid-cols-12 gap-5 ">
                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#00b67f] to-[#007993] p-6 text-white">
                            <div className="absolute -left-3 -bottom-3 w-[70px] h-[70px] rounded-full bg-[#00867b]"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-[#1aa095]"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-[#32bc9a] flex items-center justify-center">
                                    <MdOutlineRemoveRedEye size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Real Vaqt Kuzatuvi</h3>
                                <span className="text-white/70 text-xs font-semibold">Faollik · Grafik · Tahlil</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-[#d0fae5] flex items-center justify-center">
                                        <MdOutlineRemoveRedEye size={18} className="text-[#0c815d]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Real vaqtda faollik kuzatuvi</h1>
                                        <p className="text-sm text-gray-500">Farzandingiz qachon va nima<br /> o'rganayotganini real vaqtda ko'ring</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-[#d0fae5] flex items-center justify-center">
                                        <FaArrowTrendUp size={18} className="text-[#0c815d]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">O'rganish grafiklari & tahlil</h1>
                                        <p className="text-xs text-gray-500">Har kunlik progress, fan bo'yicha radar tahlil <br /> va tendensiyalar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#2558fa] to-[#6d13e9] p-6 ">
                            <div className="absolute -left-3 -bottom-3 w-[70px] h-[70px] rounded-full bg-[#4437dd]"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-[#6847f4]"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-[#6271fa] flex items-center justify-center">
                                    <FiFileText size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Shaxsiy O'sish</h3>
                                <span className="text-white/70 text-xs font-semibold">Reja · Statistika · Tahlil</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-[#dbeafe] flex items-center justify-center">
                                        <FaRegBell size={18} className="text-[#1447e6]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Muhim bildirishnomalar</h1>
                                        <p className="text-sm text-gray-500">Past natijalar, yutuqlar va faollik haqida o'z <br /> vaqtida xabardor bo'ling</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-[#dbeafe] flex items-center justify-center">
                                        <FiFileText size={18} className="text-[#1447e6]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Batafsil PDF hisobotlar</h1>
                                        <p className="text-xs text-gray-500">Haftalik, oylik va choraklik to'liq ta'lim <br /> hisobotlari</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#fd1d5b] to-[#9d0b9a] p-6 text-white">
                            <div className="absolute -left-4 -bottom-4 w-[70px] h-[70px] rounded-full bg-[#cc006b]"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-[#dc1a92]"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-[#f53986] flex items-center justify-center">
                                    <LuShield size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Xavfsiz Ulanish</h3>
                                <span className="text-white/70 text-xs font-semibold">IDR · O'qituvchi · Himoya</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-[#ffe4e6] flex items-center justify-center">
                                        <LuShield size={18} className="text-[#c8083c]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">IDR tizimi orqali xavfsiz aloqa</h1>
                                        <p className="text-sm text-gray-500">Faqat farzandingiz tasdiqlagan ulanishlar <br /> to'liq nazorat sizda</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-[#ffe4e6] flex items-center justify-center">
                                        <RiGraduationCapLine size={18} className="text-[#c8083c]" />
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
    )
}

export default Parent