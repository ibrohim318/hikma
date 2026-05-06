import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import useRegister from "../../../hooks/useRegister";
import { ROLES } from "../../../constants/roles";
import { Toaster, toast } from "react-hot-toast";
import { setCookie } from "../../../utils/cookie";

function ParentSignup() {
    useEffect(() => {
        document.title = "Ota-ona - Ro'yxatdan o'tish";
    }, []);

    const { register, loading } = useRegister();
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState(true);
    const [parentid, setParentid] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [parent, setParent] = useState(null);
    const [id, setId] = useState("");
    const [errors, setErrors] = useState({});

    const maleRef = useRef(null);
    const femaleRef = useRef(null);

    const clearError = (field) => setErrors(prev => ({ ...prev, [field]: false }));

    const handleKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            if (!parent) { setParent("Ota"); maleRef.current.focus(); }
            else if (parent === "Ota") { setParent("Ona"); femaleRef.current.focus(); }
            else { femaleRef.current.blur(); }
        }
    };

    const formatPhone = (value) => {
        let digits = value.replace(/\D/g, "").slice(0, 9);
        let formatted = digits;
        if (digits.length > 2) formatted = digits.slice(0, 2) + "-" + digits.slice(2);
        if (digits.length > 5) formatted = digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5);
        if (digits.length > 7) formatted = digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5, 7) + "-" + digits.slice(7);
        return formatted;
    };

    const handleIdChange = (e) => {
        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
        let formatted = value.slice(0, 3);
        if (value.length >= 4) formatted += "-" + value.slice(3, 7);
        if (value.length >= 8) formatted += "-" + value.slice(7, 11);
        setId(formatted);
        clearError("id");
    };

    const handleSubmit = async () => {
        if (loading) return;

        const newErrors = {};
        if (!name.trim()) newErrors.name = true;
        if (!lastName.trim()) newErrors.lastName = true;
        if (!phone.trim()) newErrors.phone = true;
        if (!parent) newErrors.parent = true;
        if (!id.trim()) newErrors.id = true;
        if (!email.trim()) newErrors.email = true;


        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast.error("Barcha maydonlarni to'ldiring!");
            return;
        }

        const cleanPhone = "998" + phone.replace(/\D/g, "");
        const payload = {
            first_name: name,
            last_name: lastName,
            father_name: "",
            phone: cleanPhone,
            relation: parent,
            password: cleanPhone,
        };

        try {
            await register(ROLES.PARENT, payload);

            const loginRes = await fetch("http://64.23.232.25:8000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: cleanPhone, password: cleanPhone }),
            });

            const loginData = await loginRes.json();
            if (!loginRes.ok) throw new Error("Login ishlamadi");

            const token = loginData.access_token;
            if (token) {
                setCookie("token", token, 7);
                localStorage.setItem("token", token);
            }

            toast.success("Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!");
            navigate("/parentDashboard");

        } catch (err) {
            console.log(err);
            if (err?.response?.status === 409) {
                toast.error("Bu telefon raqam allaqachon mavjud");
            } else {
                toast.error("Xatolik yuz berdi");
            }
        }
    };

    const inputBox = (hasError) =>
        `w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border
    ${hasError ? "border-red-400 animate-shake" : "border-gray-200"}
    focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition-all`;

    return (
        <div className="w-[78%] h-[640px]">
            {signupData && (
                <div data-aos="fade-up">
                    {/* Ism & Familiya */}
                    <div className="w-full flex gap-4">
                        <div className="w-1/2">
                            <h3 className="text-sm">Ism</h3>
                            <div className={inputBox(errors.name)}>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); clearError("name"); }}
                                    placeholder="Ism"
                                    className="w-full bg-transparent focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <h3 className="text-sm">Familiya</h3>
                            <div className={inputBox(errors.lastName)}>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => { setLastName(e.target.value); clearError("lastName"); }}
                                    placeholder="Familiya"
                                    className="w-full bg-transparent focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Telefon & Email */}
                    <div className="w-full mt-5 flex gap-4">
                        <div className="w-1/2">
                            <h3 className="text-sm">Telefon raqam</h3>
                            <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center border ${errors.phone ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition-all`}>
                                <div className="px-3 text-gray-500 font-medium border-r border-gray-300">+998</div>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => { setPhone(formatPhone(e.target.value)); clearError("phone"); }}
                                    placeholder="90-123-45-67"
                                    className="flex-1 px-3 bg-transparent focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <h3 className="text-sm">Email</h3>
                            {/* ✅ email majburiy emas — error yo'q */}
                            <div className="w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center border border-transparent focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition-all">
                                <input
                                    type="email"
                                    placeholder="email@com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-3 bg-transparent focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Siz kimsiz */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label className={`font-medium ${errors.parent ? "text-red-500" : ""}`}>
                            Siz kimsiz? {errors.parent && <span className="text-xs font-normal">— tanlang</span>}
                        </label>
                        <div className={`flex gap-4 ${errors.parent ? "animate-shake" : ""}`} onKeyDown={handleKeyDown}>
                            <button
                                ref={maleRef}
                                type="button"
                                onClick={() => { setParent("Ota"); clearError("parent"); }}
                                className={`px-[87px] py-1.5 rounded-xl border transition
                ${parent === "Ota"
                                        ? "bg-green-100 border-green-500"
                                        : errors.parent
                                            ? "bg-red-50 border-red-400"   // ✅ xato holati
                                            : "bg-gray-100 border-gray-200"
                                    }`}
                            >
                                👦 Ota
                            </button>
                            <button
                                ref={femaleRef}
                                type="button"
                                onClick={() => { setParent("Ona"); clearError("parent"); }}
                                className={`px-[87px] py-1.5 rounded-xl border transition
                ${parent === "Ona"
                                        ? "bg-green-100 border-green-500"
                                        : errors.parent
                                            ? "bg-red-50 border-red-400"   // ✅ xato holati
                                            : "bg-gray-100 border-gray-200"
                                    }`}
                            >
                                👩 Ona
                            </button>
                        </div>
                    </div>

                    {/* Farzand IDR ID */}
                    <div className="w-full mt-4">
                        <h3 className="text-sm">Farzand IDR ID</h3>
                        <div className={inputBox(errors.id)}>
                            <input
                                type="text"
                                value={id}
                                onChange={handleIdChange}
                                placeholder="IDR-2024-XXXX"
                                className="w-full bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full h-[45px] rounded-xl mt-6 flex items-center gap-3 justify-center text-white font-semibold bg-gradient-to-r from-[#00bb7d] to-[#009889] active:scale-95 transition"
                    >
                        {loading ? "Yuborilmoqda..." : "Dashboardga o'tish"}
                    </button>
                </div>
            )}

            {parentid && (
                <div>parentID</div>
            )}

            <Toaster position="top-right" />
        </div>
    );
}

export default ParentSignup;