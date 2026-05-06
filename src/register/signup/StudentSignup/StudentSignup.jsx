import { useEffect, useState, useRef, createContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

// Icons
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { Spinner } from "@/components/ui/spinner"

// Hooks & Constants
import useRegister from "../../../hooks/useRegister";
import { ROLES } from "../../../constants/roles";
import { Toaster, toast } from "react-hot-toast";
import { setCookie } from "../../../utils/cookie";



function StudentSignup() {
    useEffect(() => {
        document.title = "Izlanuvchi - Ro'yxatdan o'tish";
    }, []);


    const { register, loading, error } = useRegister();
    // ! student signup data form
    let [signupData, setSignupData] = useState(true);
    let [next, setNext] = useState(true);

    // 

    const navigate = useNavigate();
    // AOS
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true
        })
    }, []);
    // user infos
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState(null);
    const [day, setDay] = useState("");
    const [region, setRegion] = useState("");
    const [area, setArea] = useState("");

    // empty inputs
    const [errors, setErrors] = useState({});

    // male&female focus
    const maleRef = useRef(null);
    const femaleRef = useRef(null);

    // pass to ID page
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

    // phone
    const formatPhone = (value) => {
        // faqat raqamlarni qoldir
        let digits = value.replace(/\D/g, "").slice(0, 9);

        // format: 90-123-45-67
        let formatted = digits;

        if (digits.length > 2) {
            formatted = digits.slice(0, 2) + "-" + digits.slice(2);
        }
        if (digits.length > 5) {
            formatted = digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5);
        }
        if (digits.length > 7) {
            formatted = digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5, 7) + "-" + digits.slice(7);
        }

        return formatted;
    };

    // submit
    const handleSubmit = async () => {
        let newErrors = {};
        if (!name.trim()) newErrors.name = true;
        if (!lastName.trim()) newErrors.lastName = true;
        if (!phone.trim()) newErrors.phone = true;
        if (!gender) newErrors.gender = true;
        if (!day) newErrors.day = true;
        if (!region) newErrors.region = true;
        if (!area.trim()) newErrors.area = true;
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
            phone: cleanPhone,
            father_name: "",
            birth_date: day,
            gender: gender === "erkak" ? "male" : "female",
            region: region,
            email: email,
            district: area,
            password: cleanPhone
        };

        try {
            await register(ROLES.STUDENT, payload);
            const loginRes = await fetch("https://hikma.uz/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    phone: cleanPhone,
                    password: cleanPhone,
                    email: email
                })
            });

            const loginData = await loginRes.json();

            if (!loginRes.ok) throw new Error("Login ishlamadi");

            const token = loginData.access_token;
            if (token) {
                setCookie("token", token);
                localStorage.setItem("token", token);
            }

            toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
            setSignupData(false);
            setStudentID(true);
            setNext(false);

        } catch (err) {
            console.log(err);
            if (err?.response?.status === 409) {
                toast.error("Bu telefon raqam allaqachon mavjud");
            } else {
                toast.error("Xatolik yuz berdi");
            }
        }
    };

    const goDashboard = () => {
        navigate("/studentDashboard");
    }





    //! student ID 
    let [studentID, setStudentID] = useState(false);
    // copy ID
    const [idr, setIdr] = useState("IDR-2026-2098");
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(idr);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000); // 2 sekund
    };




    return (
        <div className="w-[78%] h-[640px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-[30px] h-[30px] rounded-full bg-blue-600 text-white flex items-center justify-center">{next ? "1" : <FaCheck />}</div>
                    <div className={`w-[70px] h-[3px] ${next ? "bg-gray-200 transition-all duration-100" : "bg-blue-600 rounded-sm transition-all duration-100"}`}></div>
                    <div className={`w-[30px] h-[30px] rounded-full ${next ? " bg-gray-200 text-gray-600" : "bg-blue-600 text-white"} flex items-center justify-center`}>2</div>
                </div>
                <p className="text-sm text-gray-500">{next ? "Shaxsiy ma'lumotlar" : "ID yaratildi!"}</p>
            </div>

            {/* signup form */}

            {signupData && <div>
                <div className=" ">
                    <div data-aos="fade-up">
                        {/* Name & Lastname */}
                        <div className="w-full flex gap-4">
                            {/* Name */}
                            <div className="w-1/2">
                                <h3 className="text-sm">Ism</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.name ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all`}>
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: false })); }} placeholder="Ism" className="w-full bg-transparent focus:outline-none" />
                                </div>
                            </div>

                            {/* LastName */}
                            <div className="w-1/2">
                                <h3 className="text-sm">Familiya</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.lastName ? "border-red-500 animate-shake" : "border-transparent"}focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all`}>
                                    <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value); setErrors(prev => ({ ...prev, lastName: false })); }} placeholder="Familiya" className="w-full bg-transparent focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="w-full mt-5 flex gap-4">
                            <div className="w-1/2 ">
                                <h3 className="text-sm">Telefon raqam</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center border ${errors.phone ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    {/* +998 PREFIX */}
                                    <div className="px-3 text-gray-500 font-medium border-r border-gray-300">+998</div>
                                    {/* INPUT */}
                                    <input type="text" value={phone} onChange={(e) => {
                                        const raw = e.target.value;
                                        const formatted = formatPhone(raw);
                                        setPhone(formatted);
                                        setErrors(prev => ({ ...prev, phone: false }));
                                    }} placeholder="90-123-45-67" className="flex-1 px-3 bg-transparent focus:outline-none" />
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <h3 className="text-sm">Email</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center border ${errors.phone ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    <input type="email" placeholder="email@com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-3 bg-transparent focus:outline-none" />
                                </div>
                            </div>
                        </div>


                        {/* Gender */}
                        <div className="flex flex-col gap-2 mt-4">
                            <label className="font-medium   ">Jins *</label>
                            <div className={`flex gap-4 ${errors.gender ? "animate-shake" : ""}`} onKeyDown={handleKeyDown}>
                                <button ref={maleRef} type="button" onClick={() => { setGender("erkak"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[84px] py-1.5 rounded-xl border transition ${gender === "erkak" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👦 Erkak</button>
                                <button ref={femaleRef} type="button" onClick={() => { setGender("ayol"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[84px] py-1.5 rounded-xl border transition ${gender === "ayol" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👩 Ayol</button>
                            </div>
                        </div>

                        {/* Birthday */}
                        <div className="w-full mt-5">
                            <h3 className="text-sm">Tug'ilgan sana</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border  ${errors.day ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                <input type="date" value={day} onChange={(e) => { setDay(e.target.value); setErrors(prev => ({ ...prev, day: false })); }} className="w-full bg-transparent focus:outline-none" />
                            </div>
                        </div>

                        {/* Region & Area */}
                        <div className="w-full flex gap-4 mt-6">
                            {/* Region */}
                            <div className="w-1/2">
                                <h3 className="text-sm">Viloyat</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.region ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    <select value={region} onChange={(e) => {
                                        setRegion(e.target.value);
                                        setErrors(prev => ({ ...prev, region: false }));
                                    }} className="w-full h-full bg-transparent focus:outline-none">
                                        <option hidden value="">Tanlang</option>
                                        <option value="Toshkent shahri">Toshkent shahri</option>
                                        <option value="Toshkent viloyati">Toshkent viloyati</option>
                                        <option value="Andijon viloyati">Andijon viloyati</option>
                                        <option value="Buxoro viloyati">Buxoro viloyati</option>
                                        <option value="Farg‘ona viloyati">Farg‘ona viloyati</option>
                                        <option value="Jizzax viloyati">Jizzax viloyati</option>
                                        <option value="Xorazm viloyati">Xorazm viloyati</option>
                                        <option value="Namangan viloyati">Namangan viloyati</option>
                                        <option value="Navoiy viloyati">Navoiy viloyati</option>
                                        <option value="Qashqadaryo viloyati">Qashqadaryo viloyati</option>
                                        <option value="Samarqand viloyati">Samarqand viloyati</option>
                                        <option value="Sirdaryo viloyati">Sirdaryo viloyati</option>
                                        <option value="Surxondaryo viloyati">Surxondaryo viloyati</option>
                                        <option value="Qoraqalpog‘iston Respublikasi">Qoraqalpog‘iston Respublikasi</option>


                                    </select>
                                </div>
                            </div>

                            {/* Area */}
                            <div className="w-1/2">
                                <h3 className="text-sm">Tuman</h3>
                                <div className={`w-full h-[34px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.area ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                    <input type="text" value={area} onChange={(e) => { setArea(e.target.value); setErrors(prev => ({ ...prev, area: false })); }} placeholder="Tuman" className="w-full bg-transparent focus:outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <button onClick={handleSubmit} className=" w-full h-[45px] rounded-xl mt-6  flex items-center gap-3 justify-center  text-white font-semibold  bg-gradient-to-r from-[#1fa2d6] to-[#2563eb] active:scale-95 transition">
                        {loading ? <Spinner className="size-8" /> :
                            <div className="flex items-center gap-3">
                                <span>Davom etish</span>
                                <FaArrowRight />
                            </div>
                        }
                    </button>
                </div>
            </div>}


            {/* id part */}
            {studentID && <div className=" ">
                <center>
                    <div className="my-4 py-4 w-[100%] h-[170px]  bg-blue-100 border border-blue-300 rounded-lg ">
                        <h3 className="font-light text-md text-[#0084d1] tracking-wide">Sizning unikal IDR ID</h3>
                        <p className="text-3xl text-[#0069a8] font-medium my-2">IDR-2026-2098</p>
                        <button onClick={handleCopy} className="px-4 py-1 bg-[#f3f9ff] border  border-[#8ddaff] text-[#1990d5] rounded-lg flex items-center justify-center gap-2"><MdContentCopy />{copied ? "Nusxalandi" : "Nusxalash"}</button>
                    </div>



                    <div className="w-full grid grid-cols-10 gap-3   items-start justify-between">
                        <button onClick={() => { setStudentID(false), setSignupData(true) }} className="col-span-4 mt-3.5 py-2 bg-white hover:bg-gray-100 transition-all duration-200 border border-gray-300 rounded-lg active:scale-95 ">Orqaga</button>
                        <button onClick={goDashboard} className="col-span-6 mt-4 px-2.5 py-2 bg-blue-600 text-white rounded-lg active:scale-95 transition">
                            {loading ? <Spinner className="size-8" /> : "Dashboardga o'tish"}
                        </button>
                    </div>
                </center>
            </div>}

            <><Toaster position="top-right" /></>
        </div>
    );
}

export default StudentSignup;

