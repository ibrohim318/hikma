import { useEffect,  useRef } from "react"
// AOS
import AOS from "aos"
import "aos/dist/aos.css"

// rrd
import { useNavigate } from "react-router-dom"

// icons
import { FaArrowRight } from "react-icons/fa6"
import { IoCheckmarkSharp } from "react-icons/io5";

function TeacherSignupDatas() {
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
    const [teacher, setteacher] = useState("");
    const [subject, setSubject] = useState("");

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
    const handleSubmit = () => {
        let newErrors = {};
        if (!name.trim()) newErrors.name = true;
        if (!lastName.trim()) newErrors.lastName = true;
        if (!phone.trim()) newErrors.phone = true;
        if (!gender) newErrors.gender = true;

        if (!subject) newErrors.subject = true;
        if (!teacher.trim()) newErrors.teacher = true;
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;
        navigate("/teacherRegister/teacherID");
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
                        <label className="font-medium">Jins *</label>
                        <div className={`flex gap-4 ${errors.gender ? "animate-shake" : ""}`} onKeyDown={handleKeyDown}>
                            <button ref={maleRef} type="button" onClick={() => { setGender("erkak"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[68px] py-2.5 rounded-xl border transition ${gender === "erkak" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👦 Erkak</button>
                            <button ref={femaleRef} type="button" onClick={() => { setGender("ayol"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[68px] py-2.5 rounded-xl border transition ${gender === "ayol" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👩 Ayol</button>
                        </div>
                    </div>

                    {/* study type */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="font-medium">O'qituvchi turi *</label>
                        <div className={`flex gap-4 ${errors.gender ? "animate-shake" : ""}`} onKeyDown={handleKeyDown}>
                            <button ref={maleRef} type="button" onClick={() => { setteacher("Maktab"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[68px] py-2.5 rounded-xl border transition ${gender === "Maktab" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>Maktab</button>
                            <button ref={femaleRef} type="button" onClick={() => { setteacher("Kurs"); setErrors(prev => ({ ...prev, gender: false })); }} className={`px-[68px] py-2.5 rounded-xl border transition ${gender === "Kurs" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>Kurs</button>
                        </div>
                    </div>


                    {/*subject */}
                    <div className="w-1/2">
                        <h3 className="text-sm">Viloyat</h3>
                        <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.subject ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                            <select value={subject} onChange={(e) => { setSubject(e.target.value); setErrors(prev => ({ ...prev, subject: false })); }} className="w-full h-full bg-transparent focus:outline-none">
                                <option value="">Fan tanlang</option>
                                <option value="Matematika">Matematika</option>
                                <option value="Kimyo">Kimyo</option>
                                <option value="Fizika">Fizika</option>
                            </select>
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

export default TeacherSignupDatas