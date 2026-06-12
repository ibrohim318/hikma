import axios from "axios";

import { useEffect, useState, useRef, useReducer } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { Spinner } from "@/components/ui/spinner";

import useRegister from "../../../hooks/useRegister";
import { ROLES } from "../../../constants/roles";
import { Toaster, toast } from "react-hot-toast";
import { setCookie } from "../../../utils/cookie";


const districts = {
    "Toshkent shahri": ["Yunusobod", "Chilonzor", "Mirzo Ulug'bek", "Olmazor", "Uchtepa", "Yakkasaroy", "Sergeli", "Shayxontohur", "Bektemir", "Mirobod", "Hamza"],
    "Toshkent viloyati": ["Angren", "Bekabad", "Bo'stonliq", "Buka", "Chinoz", "Qibray", "Ohangaron", "Oqqo'rg'on", "Parkent", "Piskent", "O'rtachirchiq", "Yuqorichirchiq", "Zangiota"],
    "Andijon viloyati": ["Andijon t.", "Asaka", "Baliqchi", "Bo'z", "Buloqboshi", "Izboskan", "Jalolquduq", "Xo'jaobod", "Qo'rg'ontepa", "Marhamat", "Oltinkol", "Paxtaobod", "Shahrixon", "Ulug'nor"],
    "Buxoro viloyati": ["Buxoro t.", "G'ijduvon", "Kogon", "Romitan", "Shofirkon", "Vobkent", "Olot", "Qorako'l", "Jondor", "Peshku", "Qorovulbozor"],
    "Farg'ona viloyati": ["Farg'ona t.", "Marg'ilon", "Qo'qon", "Oltiariq", "Bag'dod", "Beshariq", "Buvayda", "Dang'ara", "Furqat", "Hamza", "O'zbekiston", "Quva", "Rishton", "So'x", "Toshloq", "Uchko'prik", "Yozyovon"],
    "Jizzax viloyati": ["Jizzax t.", "Arnasoy", "Baxmal", "Do'stlik", "Forish", "G'allaorol", "Mirzacho'l", "Paxtakor", "Sharof Rashidov", "Yangiobod", "Zarbdor", "Zafar"],
    "Xorazm viloyati": ["Urganch t.", "Bog'ot", "Gurlan", "Xiva", "Xazorasp", "Qo'shko'pir", "Shovot", "Tuproqqal'a", "Yangiariq", "Yangibozor"],
    "Namangan viloyati": ["Namangan t.", "Chortoq", "Chust", "Kosonsoy", "Mingbuloq", "Norin", "Pop", "To'raqo'rg'on", "Uychi", "Yangiqo'rg'on"],
    "Navoiy viloyati": ["Navoiy t.", "Karmana", "Konimex", "Navbahor", "Nurota", "Qiziltepa", "Tomdi", "Uchquduq", "Xatirchi"],
    "Qashqadaryo viloyati": ["Qarshi t.", "Chiroqchi", "Dehqonobod", "G'uzor", "Kasbi", "Kitob", "Koson", "Mirishkor", "Muborak", "Nishon", "Qamashi", "Shahrisabz", "Yakkabog'"],
    "Samarqand viloyati": ["Samarqand t.", "Bulung'ur", "Ishtixon", "Jomboy", "Kattaqo'rg'on", "Narpay", "Nurobod", "Oqdaryo", "Pastdarg'om", "Payariq", "Qo'shrabot", "Toyloq", "Urgut"],
    "Sirdaryo viloyati": ["Guliston t.", "Boyovut", "Havast", "Mirzaobod", "Oqoltin", "Sardoba", "Sayxunobod", "Shirin", "Xovos"],
    "Surxondaryo viloyati": ["Termiz t.", "Angor", "Bandixon", "Boysun", "Denov", "Jarqo'rg'on", "Muzrabot", "Oltinsoy", "Qiziriq", "Qumqo'rg'on", "Sariosiyo", "Sherobod", "Sho'rchi", "Uzun"],
    "Qoraqalpog'iston Respublikasi": ["Nukus t.", "Amudaryo", "Beruniy", "Chimboy", "Ellikkala", "Kegeyli", "Mo'ynoq", "Nukus", "Qanliko'l", "Qorao'zak", "Shumanay", "Taxtako'pir", "To'rtko'l", "Xo'jayli"],
};

//  Reducer
const initialRegionState = {
    region: "",
    district: "",
    districtList: [],
};

function regionReducer(state, action) {
    switch (action.type) {
        case "SELECT_REGION":
            return {
                region: action.payload,
                district: "",
                districtList: districts[action.payload] || [],
            };
        case "SELECT_DISTRICT":
            return { ...state, district: action.payload };
        default:
            return state;
    }
}

function StudentSignup() {
    const { setUserName, setLastname, setUserPhone } = useAuth();

    useEffect(() => {
        document.title = "Izlanuvchi - Ro'yxatdan o'tish";
    }, []);

    const { register, loading, error } = useRegister();
    const [signupData, setSignupData] = useState(true);
    const [next, setNext] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState(null);
    const [day, setDay] = useState("");

    //  useReducer — region & district
    const [regionState, dispatch] = useReducer(regionReducer, initialRegionState);

    const [errors, setErrors] = useState({});
    const maleRef = useRef(null);
    const femaleRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            if (!gender) {
                setGender("erkak");
                maleRef.current.focus();
            } else if (gender === "erkak") {
                setGender("ayol");
                femaleRef.current.focus();
            } else {
                femaleRef.current.blur();
            }
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

    const handleSubmit = async () => {
        let newErrors = {};

        if (!name.trim()) newErrors.name = true;
        if (!lastName.trim()) newErrors.lastName = true;
        if (!fatherName.trim()) newErrors.fatherName = true;
        if (!phone.trim()) newErrors.phone = true;
        if (!gender) newErrors.gender = true;
        if (!day) newErrors.day = true;
        if (!regionState.region) newErrors.region = true;
        if (!regionState.district) newErrors.district = true;
        if (!email.trim()) newErrors.email = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast.error("Barcha maydonlarni to'ldiring!");
            return;
        }

        const cleanPhone = "998" + phone.replace(/\D/g, "");

        const payload = {
            email,
            first_name: name,
            last_name: lastName,
            father_name: fatherName,
            phone: cleanPhone,
            gender: gender === "erkak" ? "male" : "female",
            birth_date: day,
            region: regionState.region,
            district: regionState.district,
            password: cleanPhone,
        };

        console.log("Payload:", payload);

        try {
            // REGISTER
            const registerData = await register(
                ROLES.STUDENT,
                payload
            );

            console.log("REGISTER RESPONSE:", registerData.user_id);
            setIdr(registerData.user_id)
            // IDR ID ni qidirish
            console.log("IDR ID:", registerData?.idr_id);
            console.log("User IDR:", registerData?.user?.idr_id);

            // Agar IDR ID bo'lsa saqlaymiz
            const idrID =
                registerData?.idr_id ||
                registerData?.user?.idr_id;

            if (idrID) {
                setIdr(idrID);
                localStorage.setItem("idr_id", idrID);
            }

            // LOGIN
            const loginRes = await fetch(
                "https://hikma.uz/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        phone: cleanPhone,
                        password: cleanPhone,
                        email,
                    }),
                }
            );

            const loginData = await loginRes.json();

            if (!loginRes.ok) {
                throw new Error("Login ishlamadi");
            }

            const token = loginData.access_token;

            if (token) {
                setCookie("token", token);
                localStorage.setItem("token", token);
            }

            // Context
            setUserName(name);
            setLastname(lastName);
            setUserPhone(phone);

            toast.success(
                "Muvaffaqiyatli ro'yxatdan o'tdingiz!"
            );

            setSignupData(false);
            setStudentID(true);
            setNext(false);

        } catch (err) {
            console.log("XATOLIK:", err);
            console.log("Response:", err?.response?.data);

            if (err?.response?.status === 409) {
                toast.error(
                    "Bu telefon raqam allaqachon mavjud"
                );
            } else {
                toast.error("Xatolik yuz berdi");
            }
        }
    };

    const goDashboard = () => navigate("/studentPage");

    const [studentID, setStudentID] = useState(false);
    const [idr, setIdr] = useState("IDR-2026-2098");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(idr);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };


    return (
        <div className="w-[78%] h-[640px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-[30px] h-[30px] rounded-full bg-blue-600 text-white flex items-center justify-center">
                        {next ? "1" : <FaCheck />}
                    </div>
                    <div className={`w-[70px] h-[3px] ${next ? "bg-gray-200" : "bg-blue-600 rounded-sm"} transition-all duration-100`}></div>
                    <div className={`w-[30px] h-[30px] rounded-full ${next ? "bg-gray-200 text-gray-600" : "bg-blue-600 text-white"} flex items-center justify-center`}>2</div>
                </div>
                <p className="text-sm text-gray-500">{next ? "Shaxsiy ma'lumotlar" : "ID yaratildi!"}</p>
            </div>

            {signupData && (
                <div>
                    <div data-aos="fade-up">
                        {/* Ism & Familiya */}
                        <div className="w-full flex gap-4">
                            <div className="w-1/2">
                                <h3 className="text-sm">Ism</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.name ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all`}>
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: false })); }} placeholder="Ism" className="w-full bg-transparent focus:outline-none" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className="text-sm">Familiya</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.lastName ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all`}>
                                    <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value); setErrors(p => ({ ...p, lastName: false })); }} placeholder="Familiya" className="w-full bg-transparent focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        {/* Sharif & Tug'ilgan sana */}
                        <div className="w-full flex gap-4 mt-5">
                            <div className="w-1/2">
                                <h3 className="text-sm">Sharif</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.fatherName ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all`}>
                                    <input type="text" value={fatherName} onChange={(e) => { setFatherName(e.target.value); setErrors(p => ({ ...p, fatherName: false })); }} placeholder="Sharif" className="w-full bg-transparent focus:outline-none" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className="text-sm">Tug'ilgan sana</h3>
                                <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.day ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    <input type="date" value={day} onChange={(e) => { setDay(e.target.value); setErrors(p => ({ ...p, day: false })); }} className="w-full bg-transparent focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        {/* Telefon & Email */}
                        <div className="w-full mt-5 flex gap-4">
                            <div className="w-1/2">
                                <h3 className="text-sm">Telefon raqam</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center border ${errors.phone ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    <div className="px-3 text-gray-500 font-medium border-r border-gray-300">+998</div>
                                    <input type="text" value={phone} onChange={(e) => { setPhone(formatPhone(e.target.value)); setErrors(p => ({ ...p, phone: false })); }} placeholder="90-123-45-67" className="flex-1 px-3 bg-transparent focus:outline-none" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className="text-sm">Email</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center border ${errors.email ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    <input type="email" placeholder="email@com" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(p => ({ ...p, email: false })); }} className="flex-1 px-3 bg-transparent focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        {/* Jins */}
                        <div className="flex flex-col gap-2 mt-4">
                            <label className="font-medium">Jins *</label>
                            <div className={`flex gap-4 ${errors.gender ? "animate-shake" : ""}`} onKeyDown={handleKeyDown}>
                                <button ref={maleRef} type="button" onClick={() => { setGender("erkak"); setErrors(p => ({ ...p, gender: false })); }} className={`px-[84px] py-1.5 rounded-xl border transition ${gender === "erkak" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👦 Erkak</button>
                                <button ref={femaleRef} type="button" onClick={() => { setGender("ayol"); setErrors(p => ({ ...p, gender: false })); }} className={`px-[84px] py-1.5 rounded-xl border transition ${gender === "ayol" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👩 Ayol</button>
                            </div>
                        </div>

                        {/* ✅ Viloyat & Tuman — useReducer bilan */}
                        <div className="w-full flex gap-4 mt-6">
                            {/* Viloyat */}
                            <div className="w-1/2">
                                <h3 className="text-sm">Viloyat</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.region ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    <select
                                        value={regionState.region}
                                        onChange={(e) => {
                                            dispatch({ type: "SELECT_REGION", payload: e.target.value });
                                            setErrors(p => ({ ...p, region: false, district: false }));
                                        }}
                                        className="w-full h-full bg-transparent focus:outline-none"
                                    >
                                        <option hidden value="">Tanlang</option>
                                        {Object.keys(districts).map((r) => (
                                            <option key={r} value={r}>{r}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Tuman */}
                            <div className="w-1/2">
                                <h3 className="text-sm">Tuman</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.district ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    <select value={regionState.district} disabled={!regionState.region} onChange={(e) => { dispatch({ type: "SELECT_DISTRICT", payload: e.target.value }); setErrors(p => ({ ...p, district: false })); }} className="w-full h-full bg-transparent focus:outline-none disabled:text-gray-400">
                                        <option hidden value="">
                                            {regionState.region ? "Tuman tanlang" : "Avval viloyat tanlang"}
                                        </option>
                                        {regionState.districtList.map((d) => (
                                            <option key={d} value={d}>{d}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Davom etish tugmasi */}
                    <button onClick={handleSubmit} className="w-full h-[45px] rounded-xl mt-6 flex items-center gap-3 justify-center text-white font-semibold bg-gradient-to-r from-[#1fa2d6] to-[#2563eb] active:scale-95 transition">
                        {loading ? <Spinner className="size-8" /> : (
                            <div className="flex items-center gap-3">
                                <span>Davom etish</span>
                                <FaArrowRight />
                            </div>
                        )}
                    </button>
                </div>
            )}

            {/* ID qismi */}
            {studentID && (
                <div>
                    <center>
                        <div className="my-4 py-4 w-[100%] h-[170px] bg-blue-100 border border-blue-300 rounded-lg">
                            <h3 className="font-light text-md text-[#0084d1] tracking-wide">Sizning unikal IDR ID</h3>
                            <p className="text-3xl text-[#0069a8] font-medium my-2">{idr}</p>
                            <button onClick={handleCopy} className="px-4 py-1 bg-[#f3f9ff] border border-[#8ddaff] text-[#1990d5] rounded-lg flex items-center justify-center gap-2 mx-auto">
                                <MdContentCopy />{copied ? "Nusxalandi" : "Nusxalash"}
                            </button>
                        </div>
                        <div className="w-full grid grid-cols-10 gap-3 items-start justify-between">
                            <button onClick={goDashboard} className="col-span-10 mt-4 px-2.5 py-2 bg-blue-600 text-white rounded-lg active:scale-95 transition">
                                {loading ? <Spinner className="size-8" /> : "Dashboardga o'tish"}
                            </button>
                        </div>
                    </center>
                </div>
            )}

            <Toaster position="top-right" />
        </div>
    );
}

export default StudentSignup;