import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MdPhoneInTalk } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Toaster, toast } from "react-hot-toast";

import API from "../../api/axios";

function StudentLogin() {
    const navigate = useNavigate();
    const [sms, setSms] = useState(false);
    const [step, setStep] = useState("phone"); // "phone" | "code"
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState("");

    const formatPhone = (value) => {
        let digits = value.replace(/\D/g, "").slice(0, 9);
        let formatted = digits;
        if (digits.length > 2) formatted = digits.slice(0, 2) + "-" + digits.slice(2);
        if (digits.length > 5) formatted = digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5);
        if (digits.length > 7) formatted = digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5, 7) + "-" + digits.slice(7);
        return formatted;
    };

    // 1. OTP generatsiya qilish (hozircha mock)
    const handleSendCode = () => {
        if (!phone.trim() || phone.replace(/\D/g, "").length < 9) {
            toast.error("To'liq telefon raqamni kiriting!");
            return;
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(otp);
        console.log(
            "%c📱 SMS OTP kodi: " + otp,
            "color:#1D9E75;font-size:18px;font-weight:bold;background:#E1F5EE;padding:6px 12px;border-radius:4px"
        );
        toast.success("SMS yuborildi! (Kodni consoleda ko'ring)");
        setStep("code");
    };

    // 2. OTP tekshirish va login
    const handleVerifyCode = async () => {
        if (!code.trim()) { toast.error("Kodni kiriting!"); return; }

        if (code !== generatedOtp) {
            toast.error("Kod noto'g'ri!");
            return;
        }

        const cleanPhone = "+998" + phone.replace(/\D/g, "");
        setLoading(true);

        try {
            const res = await fetch(`${API}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: cleanPhone, password: code })
            });

            const token = await res.text();

            if (!res.ok) {
                let msg = "Xatolik yuz berdi";
                try { const j = JSON.parse(token); msg = j.detail || msg; } catch (_) { };
                throw new Error(msg);
            }

            const cleanToken = token.replace(/"/g, "");
            localStorage.setItem("token", cleanToken);
            toast.success("Tizimga kirdingiz!");
            navigate("/dashboard");

        } catch (err) {
            toast.error(err.message || "Xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`w-[85%] ${sms ? "h-[310px]" : "h-[190px]"} border border-gray-300 rounded-xl shadow-md p-6 transition-all duration-300 ease-out`}>
            <div>
                <h1 className="text-xl font-semibold">Tizimga kirish</h1>
                <p className="text-sm text-gray-400 font-medium mt-0.5">SMS yoki Google hisob bilan kiring</p>
            </div>

            <div className="mt-[25px]">
                {/* Buttons */}
                <div className="w-full flex gap-4">
                    <button
                        onClick={() => { setSms(true); setStep("phone"); setCode(""); }}
                        className={`w-1/2 h-[48px] border shadow-sm hover:shadow-md rounded-xl flex items-center justify-center gap-4 transition ${sms ? "bg-blue-50 border-blue-400" : "bg-white"}`}>
                        <MdPhoneInTalk className="w-5 h-5 text-blue-800" />
                        <h1>SMS bilan</h1>
                    </button>

                    <button
                        onClick={() => setSms(false)}
                        className="w-1/2 h-[48px] bg-white border shadow-sm hover:shadow-md rounded-xl flex items-center justify-center gap-4">
                        <FcGoogle className="w-5 h-5" />
                        <h1>Google hisob bilan</h1>
                    </button>
                </div>

                {/* phone & sms code */}
                {sms && (
                    <div className="mt-4">
                        {/* phone number */}
                        {step === "phone" && (
                            <div>
                                <div className="w-full h-[40px] bg-white border border-gray-300 rounded-xl flex items-center focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300">
                                    <div className="px-3 text-gray-500 font-medium border-r border-gray-300">+998</div>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(formatPhone(e.target.value))}
                                        onKeyDown={(e) => e.key === "Enter" && handleSendCode()}
                                        placeholder="90-123-45-67"
                                        className="flex-1 px-3 bg-transparent focus:outline-none"
                                    />
                                </div>
                                <button
                                    onClick={handleSendCode}
                                    className="w-full h-[40px] mt-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 active:scale-95 transition-all">
                                    SMS yuborish
                                </button>
                            </div>
                        )}

                        {/* sms code */}
                        {step === "code" && (
                            <div>
                                <div className="w-full h-[40px] bg-white border border-gray-300 rounded-xl flex items-center px-4 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300">
                                    <input
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                                        onKeyDown={(e) => e.key === "Enter" && !loading && handleVerifyCode()}
                                        placeholder="SMS kodni kiriting..."
                                        maxLength={6}
                                        className="w-full bg-transparent focus:outline-none"
                                    />
                                </div>
                                <button
                                    onClick={handleVerifyCode}
                                    disabled={loading}
                                    className="w-full h-[40px] mt-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 active:scale-95 transition-all disabled:opacity-50">
                                    {loading ? "Tekshirilmoqda..." : "Tizimga kirish"}
                                </button>
                                <button
                                    onClick={() => { setStep("phone"); setCode(""); setGeneratedOtp(""); }}
                                    className="w-full mt-2 text-sm text-gray-400 hover:text-gray-600 transition">
                                    ← Raqamni o'zgartirish
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Toaster position="top-right" />
        </div>
    );
}

export default StudentLogin;