import { LuBrain } from "react-icons/lu";

function Navbar() {
    return (
        <nav>
            <div className=" lg:px-[150px] lg:mt-8 sm:mt-4 sm:ml-4 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <LuBrain size={25} className="text-white" />
                </div>
                <div>
                    <h1 className=" font-[700] text-lg text-gray-800">Hikma</h1>
                    <p className="text-xs text-gray-500">{`Ta'lim Platformasi`}</p>
                </div>
            </div>
            <div className="lg:hidden w-full h-[1px] bg-gray-300 mt-2"></div>
        </nav>
    )
}

export default Navbar