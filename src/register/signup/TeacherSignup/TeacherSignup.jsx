import { useEffect, useRef, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6"
import useRegister from "../../../hooks/useRegister";
import { ROLES } from "../../../constants/roles";
import { Toaster, toast } from "react-hot-toast";

function TeacherSignup() {
    useEffect(() => {
        document.title = "O'qituvchi - Ro'yxatdan o'tish";
    }, []);

    const navigate = useNavigate();
    const { register, loading } = useRegister();

    useEffect(() => {
        AOS.init({ duration: 500, once: true })
    }, []);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState(null);
    const [teacher, setTeacher] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [school, setSchool] = useState(false);
    const [course, setCourse] = useState(false);
    const [errors, setErrors] = useState({});

    const maleRef = useRef(null);
    const femaleRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            if (!gender) { setGender("erkak"); maleRef.current.focus(); }
            else if (gender === "erkak") { setGender("ayol"); femaleRef.current.focus(); }
            else { femaleRef.current.blur(); }
        }
    };

    // format phone
    const formatPhone = (value) => {
        let digits = value.replace(/\D/g, "").slice(0, 9);
        let formatted = digits;
        if (digits.length > 2) formatted = digits.slice(0, 2) + "-" + digits.slice(2);
        if (digits.length > 5) formatted = digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5);
        if (digits.length > 7) formatted = digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5, 7) + "-" + digits.slice(7);
        return formatted;
    };

    const handleGoDashboard = async () => {
        if (loading) return;
        let newErrors = {};
        if (!name.trim()) newErrors.name = true;
        if (!lastName.trim()) newErrors.lastName = true;
        if (!phone.trim()) newErrors.phone = true;
        if (!gender) newErrors.gender = true;
        if (!teacher) newErrors.teacher = true;
        if (!subject) newErrors.subject = true;
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
            password: cleanPhone,
            email: email,
        };

        try {
            await register(ROLES.TEACHER, payload);

            const loginRes = await fetch("https://hikma.uz/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: cleanPhone, password: cleanPhone })
            });

            const loginData = await loginRes.json();
            if (!loginRes.ok) throw new Error("Login ishlamadi");

            const token = loginData.access_token;
            if (token) {
                localStorage.setItem("token", token);
            }

            toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
            navigate("/teacherDashboard");

        } catch (err) {
            console.log(err);
            if (err?.response?.status === 409) {
                toast.error("Bu telefon raqam allaqachon mavjud");
            } else {
                toast.error("Xatolik yuz berdi");
            }
        }
    };

    return (
        <div className="w-[78%] h-[640px]">
            <div data-aos="fade-up">
                {/* Name & Lastname */}
                <div className="w-full flex gap-4">
                    <div className="w-1/2">
                        <h3 className="text-sm">Ism</h3>
                        <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.name ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200 transition-all`}>
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: false })); }} placeholder="Ism" className="w-full bg-transparent focus:outline-none" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-sm">Familiya</h3>
                        <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.lastName ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200 transition-all`}>
                            <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value); setErrors(prev => ({ ...prev, lastName: false })); }} placeholder="Familiya" className="w-full bg-transparent focus:outline-none" />
                        </div>
                    </div>
                </div>

                {/* Phone & email*/}
                <div className="w-full mt-5 flex gap-4 ">
                    <div className="w-1/2 ">
                        <h3 className="text-sm">Telefon raqam</h3>
                        <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center border ${errors.phone ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200`}>
                            <div className="px-3 text-gray-500 font-medium border-r border-gray-300">+998</div>
                            <input type="text" value={phone} onChange={(e) => { setPhone(formatPhone(e.target.value)); setErrors(prev => ({ ...prev, phone: false })); }} placeholder="90-123-45-67" className="flex-1 px-3 bg-transparent focus:outline-none" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm w-1/2">Email</h3>
                        <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center border ${errors.email ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200`}>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: false })); }} placeholder="email@gmail.com" className="flex-1 px-3 bg-transparent focus:outline-none" />
                        </div>
                    </div>
                </div>
                {/* Gender */}
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-medium">Jins *</label>
                    <div className={`flex gap-4 ${errors.gender ? "animate-shake" : ""}`} onKeyDown={handleKeyDown}>
                        <button ref={maleRef} type="button" onClick={() => { setGender("erkak"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[83px] py-1 rounded-xl border transition ${gender === "erkak" ? "bg-pink-100 border-pink-500" : "bg-white"}`}>👦 Erkak</button>
                        <button ref={femaleRef} type="button" onClick={() => { setGender("ayol"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[83px] py-1 rounded-xl border transition ${gender === "ayol" ? "bg-pink-100 border-pink-500" : "bg-white"}`}>👩 Ayol</button>
                    </div>
                </div>

                {/* O'qituvchi turi */}
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-medium">O'qituvchi turi</label>
                    <div className={`flex gap-4 ${errors.teacher ? "animate-shake" : ""}`}>
                        <button type="button" onClick={() => { setSchool(true); setCourse(false); setTeacher("Maktab"); setErrors(prev => ({ ...prev, teacher: false })); }} className={`flex-1 py-1 rounded-xl border transition-all duration-300 ${teacher === "Maktab" ? "bg-pink-100 border-pink-500 scale-105 shadow-md" : "bg-gray-100 hover:bg-gray-200"}`}>Maktab</button>
                        <button type="button" onClick={() => { setCourse(true); setSchool(false); setTeacher("Kurs"); setErrors(prev => ({ ...prev, teacher: false })); }} className={`flex-1 py-1 rounded-xl border transition-all duration-300 ${teacher === "Kurs" ? "bg-pink-100 border-pink-500 scale-105 shadow-md" : "bg-gray-100 hover:bg-gray-200"}`}>Kurs</button>
                    </div>
                </div>

                {/* School subject */}
                <div className={`overflow-hidden transition-all duration-300 ease-out ${school ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <h3 className="text-sm">Fan</h3>
                    <div className={`w-full h-[42px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.subject ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200`}>
                        <select value={subject} onChange={(e) => { setSubject(e.target.value); setErrors(prev => ({ ...prev, subject: false })); }} className="w-full h-full bg-transparent focus:outline-none">
                            <option value="" hidden>Fan tanlang</option>
                            <option>Matematika</option>
                            <option>Kimyo</option>
                            <option>Fizika</option>
                        </select>
                    </div>
                </div>

                {/* Course */}
                <div className={`overflow-hidden transition-all duration-300 ease-out ${course ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <h3 className="text-sm">Qaysi kursdan</h3>
                    <div className={`w-full h-[42px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.subject ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200`}>
                        <input type="text" value={subject} onChange={(e) => { setSubject(e.target.value); setErrors(prev => ({ ...prev, subject: false })); }} placeholder="Kurs nomi..." className="w-full bg-transparent focus:outline-none" />
                    </div>
                </div>
            </div>

            {/* Button */}
            <button onClick={handleGoDashboard} className="w-full h-[48px] rounded-xl mt-6 flex items-center gap-3 justify-center text-white font-semibold bg-gradient-to-r from-[#8021fc] to-[#8200db] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(130,0,219,0.35)] hover:-translate-y-0.5 active:scale-95">
                <span>{loading ? "Yuborilmoqda..." : "Davom etish"}</span>
                <FaArrowRight />
            </button>

            <Toaster position="top-right" />
        </div>
    )
}

export default TeacherSignup