// * aos
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ? icons
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";


import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuChartColumn } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";   // eng o‘xshashi
import { HiOutlineTrophy } from "react-icons/hi2";

function Teacher() {
    useEffect(() => {
        AOS.init({
            duration: 500, // animatsiya vaqti
            once: true,     // faqat 1 marta ishlaydi
        });
    }, []);

    return (
        <div>
            <center className="my-8 flex items-center justify-center gap-2">
                <RiGraduationCapLine className="text-[#8b3bfe] font-semibold" />
                <h3 className="text-[#8b3bfe] font-semibold">Har bir o'quvchi — alohida potensial</h3>
            </center>
            <div className="relative">
                <div className="grid grid-cols-12 gap-5 ">
                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#801ef9] to-[#4028b1] p-6 text-white">
                            <div className="absolute -left-3 -bottom-3 w-[70px] h-[70px] rounded-full bg-[#7300c2]"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-[#8525d7]"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-[#9a44f3] flex items-center justify-center">
                                    <MdOutlinePeopleAlt size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Sinf Boshqaruvi</h3>
                                <span className="text-white/70 text-xs font-semibold">Ro'yxat · Profil · Kuzatuv</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-[#ede9fe] flex items-center justify-center">
                                        <MdOutlinePeopleAlt size={18} className="text-[#8e3eec]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">O'quvchilar ro'yxati va boshqaruvi</h1>
                                        <p className="text-sm text-gray-500">IDR tizimi orqali o'quvchi qo'shing <br />profilini ko'ring, kuzating</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-[#ede9fe] flex items-center justify-center">
                                        <TbActivityHeartbeat size={18} className="text-[#8e3eec]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Faollik va ishtirok darajasi</h1>
                                        <p className="text-xs text-gray-500">Kunlar bo'yicha faollik grafiklari va real vaqt <br />kuzatuvi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#00b2cb] to-[#007e5d] p-6 ">
                            <div className="absolute -left-3 -bottom-3 w-[70px] h-[70px] rounded-full bg-[#00867a]"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-[#1a9d8e]"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-[#32b7bf] flex items-center justify-center">
                                    <LuChartColumn size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Chuqur Tahlil</h3>
                                <span className="text-white/70 text-xs font-semibold">Ball · Tendensiya · Zaiflik</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-[#cefafe] flex items-center justify-center">
                                        <LuChartColumn size={18} className="text-[#007595]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Sinf natijalari tahlili</h1>
                                        <p className="text-sm text-gray-500">Haftalik dinamika, o'rtacha ball va<br />tendensiyalarni ko'ring</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-[#cefafe] flex items-center justify-center">
                                        <FiTarget size={18} className="text-[#007595]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Zaif tomonlarni aniqlash</h1>
                                        <p className="text-xs text-gray-500">Qaysi mavzuda o'quvchi qiynalayotganini <br /> darhol bilib oling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 w-full h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-aos="fade-up">
                        <div className="w-full h-[170px] relative rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#fd8e00] to-[#e80004] p-6 text-white">
                            <div className="absolute -left-4 -bottom-4 w-[70px] h-[70px] rounded-full bg-[#f4531a]"></div>
                            <div className="absolute -right-4 -top-4 w-[90px] h-[90px] rounded-full bg-[#dc4100]"></div>

                            <div className="relative z-10">
                                <div className="w-[45px] h-[45px] rounded-lg bg-[#fb9133] flex items-center justify-center">
                                    <HiOutlineTrophy size={25} className="text-white" />
                                </div>
                                <h3 className="text-white text-lg font-semibold mt-3">Reyting & Hisobot</h3>
                                <span className="text-white/70 text-xs font-semibold">Top · PDF · Ota-ona</span>
                            </div>
                        </div>

                        <div className="m-3 space-y-3">
                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start gap-3 ">
                                    <div className="w-[36px] h-[37px] rounded-lg bg-[#fef3c6] flex items-center justify-center">
                                        <HiOutlineTrophy size={18} className="text-[#bb4d00]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Top o'quvchilar reytingi</h1>
                                        <p className="text-sm text-gray-500">Eng yaxshi natijalar, o'sish dinamikasi va <br /> mukofot tizimi</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[93px] bg-gray-50 rounded-xl p-3 hover:bg-[#f0f0f4] transition-all duration-300">
                                <div className="flex items-start  gap-3">
                                    <div className="w-[38px] h-[36px] rounded-lg bg-[#fef3c6] flex items-center justify-center">
                                        <FaRegStar size={18} className="text-[#bb4d00]" />
                                    </div>
                                    <div>
                                        <h1 className="text-md font-medium">Ota-onalarga avtomatik hisobot</h1>
                                        <p className="text-xs text-gray-500">Bir bosish bilan PDF hisobot yaratish va <br /> yuborish</p>
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

export default Teacher