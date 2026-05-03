import { useState } from "react"
// icons
import { MdPhoneInTalk } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

// toaster
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function ParentLogin() {
    const [errors, setErrors] = useState({})
    const [sms, setSms] = useState(false);

    // sms signup 
    function phone() {
        setSms(true)
        toast.success(" SMS xabar telefon raqamingizga yuborildi ", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, });
    }

    // google signup 
    function google() {
        setSms(false)

        toast.success("Xabar Email pochtangizaga yuborildi ", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, });
        // toast.error("Email pochtangizaga yuborilmadi", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, });
    }

    return (
        <div className={`w-[85%] ${sms ? "h-[290px] transition-all duration-300 ease-out" : "h-[190px] transition-all duration-300 ease-out"} border border-gray-300 rounded-xl shadow-md p-6`}>
            <div>
                <h1 className="text-xl font-semibold">Tizimga kirish</h1>
                <p className="text-sm text-gray-400 font-medium mt-0.5">SMS yoki Google hisb bilan kiring</p>
            </div>
            <div className="mt-[25px]">
                <div className="w-full flex gap-4">
                    <button onClick={phone} className="w-1/2 h-[48px] bg-white border shadow-sm hover:shadow-md rounded-xl flex items-center justify-center gap-4   ">
                        <MdPhoneInTalk className="w-5 h-5 text-blue-800" />
                        <h1>SMS bilan</h1>
                    </button>

                    <button onClick={google} className="w-1/2 h-[48px] bg-white border shadow-sm hover:shadow-md rounded-xl flex items-center justify-center gap-4   ">
                        <FcGoogle className="w-5 h-5 text-blue-800" />
                        <h1>Google hisob bilan</h1>
                    </button>
                </div>
                {/* sms input */}
                {sms && <div>
                    <div className="w-full h-[40px] bg-white border border-gray-300 rounded-xl my-6 flex items-center px-4 transition-all duration-300 ease-out focus-within:border-green-500  focus-within:ring-2 focus-within:ring-green-300 focus-within:shadow-lg  hover:border-gray-400">
                        <input type="text" className="w-full h-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400" placeholder="SMS..." />
                    </div>
                    <button type="submit" className="w-full h-[40px] bg-green-500 rounded-lg flex items-center justify-center text-white font-semibold transition-all duration-200 ease-out hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 active:shadow-md focus:outline-none focus:ring-2 focus:ring-green-300">Tizimga kirish</button>
                </div>}
            </div>
            <><Toaster position="top-right" /></>
        </div>
    )
}

export default ParentLogin