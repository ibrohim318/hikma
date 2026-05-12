import { useNavigate } from "react-router-dom"
import { useGoogleLogin } from "@react-oauth/google"
import { MdPhoneInTalk } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { Toaster, toast } from "react-hot-toast"

import API from "../../api/axios"
import { useAuth } from "../../context/AuthContext" // ✅

function StudentLogin() {
    const navigate = useNavigate()
    const { setUserName } = useAuth() // ✅

    const google = useGoogleLogin({
        onSuccess: async ({ access_token }) => {
            const toastId = toast.loading("Kirish...")
            try {
                const googleUser = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: { Authorization: `Bearer ${access_token}` }
                }).then(res => res.json())

                const res = await API.post("/auth/google", { access_token })
                localStorage.setItem("token", res.data.access_token)
                setUserName(googleUser.given_name)
                toast.success("Xush kelibsiz!", { id: toastId })
                navigate("/studentDashboard")
            } catch (err) {
                const message = err.response?.data?.detail
                if (message === "User not found") {
                    toast.error("Bu Google akkaunt ro'yxatdan o'tmagan!", { id: toastId })
                } else {
                    toast.error(message || "Xatolik yuz berdi!", { id: toastId })
                }
            }
        },
        onError: () => toast.error("Google orqali kirib bo'lmadi!"),
    })

    return (
        <div className="w-[85%] h-[190px] border border-gray-300 rounded-xl shadow-md p-6">
            <div>
                <h1 className="text-xl font-semibold">Tizimga kirish</h1>
                <p className="text-sm text-gray-400 font-medium mt-0.5">SMS yoki Google hisob bilan kiring</p>
            </div>

            <div className="mt-[25px]">
                <div className="w-full flex gap-4">
                    <button
                        disabled
                        className="w-1/2 h-[48px] border rounded-xl flex items-center justify-center gap-4 opacity-40 cursor-not-allowed bg-white"
                    >
                        <MdPhoneInTalk className="w-5 h-5 text-blue-800" />
                        <h1>SMS bilan</h1>
                    </button>

                    <button
                        onClick={google}
                        className="w-1/2 h-[48px] border shadow-sm hover:shadow-md rounded-xl flex items-center justify-center gap-4 bg-blue-50 border-blue-400 active:scale-95 transition-all"
                    >
                        <FcGoogle className="w-5 h-5" />
                        <h1>Google bilan</h1>
                    </button>
                </div>
            </div>

            <Toaster position="top-right" />
        </div>
    )
}

export default StudentLogin