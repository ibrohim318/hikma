import { Outlet, NavLink, useLocation } from "react-router-dom"

//? icons
import { BsLightningCharge } from "react-icons/bs";
import Navbar from "../components/Navbar"
import AccessLayout from "./AccessLayout";
import { LuBrain } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";


function MainLayout() {
    const location = useLocation()

    const tabs = [
        {
            path: "/",
            label: "Izlanuvchi",
            icon: LuBrain,
            bg: "from-blue-500 to-blue-700",
        },
        {
            path: "/parent",
            label: "Ota-ona",
            icon: MdOutlinePeopleAlt,
            bg: "from-green-500 to-emerald-700",
        },
        {
            path: "/teacher",
            label: "O'qituvchi",
            icon: RiGraduationCapLine,
            bg: "from-purple-500 to-indigo-700",
        }
    ]


    return (
        <div className="px-[150px] mt-8">
            <Navbar />
            {/*  Background blur layer */}
            <div className="relative overflow-hidden mt-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 opacity-30 blur-3xl rounded-full"></div>
                </div>

                <center className="py-10">
                    {/* <div className="w-[250px] h-6 flex gap-2 items-center justify-center py-3.5 bg-gray-200 rounded-full border border-gray-300">
                        <BsLightningCharge className="text-gray-500" />
                        <p className="text-sm text-gray-500">Platforma sizga nima beradi?</p>
                    </div> */}
                    <h1 className="mt-3 mb-6 text-3xl text-gray-900 font-bold">Biz bilim bermaymiz{" - "}<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">fikrlashni shakllantiramiz !</span></h1>
                    {/* roles */}
                    <div className="w-[560px] h-[64px] p-1.5 rounded-2xl border border-gray-200 flex">
                        {tabs.map((tab) => {
                            const isActive = location.pathname === tab.path
                            const Icon = tab.icon
                            return (
                                <NavLink key={tab.path} to={tab.path} className="relative flex w-[180px] h-[52px] items-center justify-center gap-2 rounded-xl overflow-hidden" >
                                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.bg} transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"} `} />
                                    <div className="relative z-10 flex items-center gap-2">
                                        <div className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${isActive ? "bg-white/20" : "bg-gray-200"}`}>
                                            <Icon className={`transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500"}`} />
                                        </div>
                                        <span className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400"}`}>{tab.label}</span>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </center>
            </div >
            <Outlet />
            <div className="mt-12 flex items-center justify-center gap-4">
                <div className="flex-1 h-[2px] bg-gray-200"></div>
                <h3 className="px-4 text-gray-700 text-xl whitespace-nowrap font-bold">Rolingizni tanlang va boshlang</h3>
                <div className="flex-1 h-[2px] bg-gray-200"></div>
            </div>

            <AccessLayout />
        </div >
    )
}

export default MainLayout