import axios from "axios"

import { useEffect, useState, useRef } from "react"
// AOS
import AOS from "aos"
import "aos/dist/aos.css"

// rrd
import { useNavigate } from "react-router-dom"

// icons
import { FaArrowRight } from "react-icons/fa6"
import { IoCheckmarkSharp } from "react-icons/io5";


function StudentSignupDatas() {
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

    // SUBMIT
    const handleSubmit = async () => {
        let newErrors = {};
        if (!name.trim()) newErrors.name = true;
        if (!lastName.trim()) newErrors.lastName = true;
        if (!phone.trim()) newErrors.phone = true;
        if (!gender) newErrors.gender = true;
        if (!day) newErrors.day = true;
        if (!region) newErrors.region = true;
        if (!area.trim()) newErrors.area = true;

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const payload = {
            first_name: name,
            last_name: lastName,
            father_name: "",
            phone: phone,
            gender: gender,
            birth_date: day,
            region: region,
            district: area,
            role: "type_a",
            password: "12345678"
        };

        try {
            const res = await axios.post(
                "http://64.23.232.25:8000/signup/", // ✅ slash qo‘shildi
                payload
            );

            console.log("SUCCESS:", res.data);

            navigate("/dashboard");

        } catch (err) {
            console.log("ERROR:", err.response?.data || err.message);
        }
    };


    return (
        <div>

            <div className=" ">
                <div data-aos="fade-up">
                    {/* Name & Lastname */}
                    <div className="w-full flex gap-4">
                        {/* Name */}
                        <div className="w-1/2">
                            <h3 className="text-sm">Ism</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.name ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all`}>
                                <input type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: false })); }} placeholder="Ism" className="w-full bg-transparent focus:outline-none" />
                            </div>
                        </div>

                        {/* LastName */}
                        <div className="w-1/2">
                            <h3 className="text-sm">Familiya</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.lastName ? "border-red-500 animate-shake" : "border-transparent"}focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all`}>
                                <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value); setErrors(prev => ({ ...prev, lastName: false })); }} placeholder="Familiya" className="w-full bg-transparent focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="w-full mt-5">
                        <h3 className="text-sm">Telefon raqam</h3>
                        <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.phone ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                            <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value); setErrors(prev => ({ ...prev, phone: false })); }} placeholder="+998 90 123 45 67" className="w-full bg-transparent focus:outline-none" />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="font-medium   ">Jins *</label>
                        <div className={`flex gap-4 ${errors.gender ? "animate-shake" : ""}`} onKeyDown={handleKeyDown}>
                            <button ref={maleRef} type="button" onClick={() => { setGender("erkak"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[68px] py-2.5 rounded-xl border transition ${gender === "erkak" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👦 Erkak</button>
                            <button ref={femaleRef} type="button" onClick={() => { setGender("ayol"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[68px] py-2.5 rounded-xl border transition ${gender === "ayol" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👩 Ayol</button>
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
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.region ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                <select value={region} onChange={(e) => { setRegion(e.target.value); setErrors(prev => ({ ...prev, region: false })); }} className="w-full h-full bg-transparent focus:outline-none">
                                    <option value="">Tanlang</option>
                                    <option value="Toshkent shahri">Toshkent shahri</option>
                                    <option value="Toshkent viloyati">Toshkent viloyati</option>
                                    <option value="Andijon viloyati">Andijon viloyati</option>
                                </select>
                            </div>
                        </div>

                        {/* Area */}
                        <div className="w-1/2">
                            <h3 className="text-sm">Tuman</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.area ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                <input type="text" value={area} onChange={(e) => { setArea(e.target.value); setErrors(prev => ({ ...prev, area: false })); }} placeholder="Tuman" className="w-full bg-transparent focus:outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <button onClick={handleSubmit} className=" w-full h-[45px] rounded-xl mt-6  flex items-center gap-3 justify-center  text-white font-semibold  bg-gradient-to-r from-[#1fa2d6] to-[#2563eb] active:scale-95 transition">
                    <span>Davom etish</span>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default StudentSignupDatas