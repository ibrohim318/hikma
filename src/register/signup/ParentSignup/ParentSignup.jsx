import { useEffect, useState, useRef } from "react"
// AOS
import AOS from "aos"
import "aos/dist/aos.css"

// rrd

// icons
import { FaArrowRight } from "react-icons/fa6"



function ParentSignup() {
    // ! parent signup data form
    let [signupData, setSignupData] = useState(true);
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
    const [parent, setparent] = useState(null);
    const [id, setid] = useState("");

    // empty inputs
    const [errors, setErrors] = useState({});

    // male&female focus
    const maleRef = useRef(null);
    const femaleRef = useRef(null);

    // pass to ID page
    const handleKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            if (!parent) {
                setparent("Ota");
                maleRef.current.focus();
            } else if (parent === "Ota") {
                setparent("Ona");
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
        if (!parent) newErrors.parent = true;
        if (!id.trim()) newErrors.id = true;
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        setSignupData(false)
        setparentid(true)
    };


    // ! parent ID
    let [parentid, setparentid] = useState(false);

    return (
        <div className="w-[78%] h-[640px]  ">
            {signupData && <div>
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

                        {/* parent */}
                        <div className="flex flex-col gap-2 mt-4">
                            <label className="font-medium">Siz kimsiz?</label>
                            <div className={`flex gap-4 ${errors.parent ? "animate-shake" : ""}`} onKeyDown={handleKeyDown}>
                                <button ref={maleRef} type="button" onClick={() => { setparent("Ota"); setErrors(prev => ({ ...prev, parent: false })); }} className={`px-[68px] py-2.5 rounded-xl border transition ${parent === "Ota" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👦 Ota</button>
                                <button ref={femaleRef} type="button" onClick={() => { setparent("Ona"); setErrors(prev => ({ ...prev, parent: false })); }} className={`px-[68px] py-2.5 rounded-xl border transition ${parent === "Ona" ? "bg-blue-100 border-blue-500" : "bg-gray-100"}`}>👩 Ona</button>
                            </div>
                        </div>

                        {/* children ID */}
                        <div className="w-full mt-4">
                            <h3 className="text-sm">Farzand IDR ID</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.id ? "border-red-500 animate-shake" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}>
                                <input type="text" value={id} onChange={(e) => { setid(e.target.value); setErrors(prev => ({ ...prev, id: false })); }} placeholder="IDR-2024-XXXX" className="w-full bg-transparent focus:outline-none" />
                            </div>
                        </div>

                    </div>

                    {/* Button */}
                    <button onClick={handleSubmit} className=" w-full h-[45px] rounded-xl mt-6  flex items-center gap-3 justify-center  text-white font-semibold  bg-gradient-to-r from-[#00bb7d] to-[#009989] active:scale-95 transition">
                        <span>Davom etish</span>
                        <FaArrowRight />
                    </button>
                </div>
            </div>}

            {parentid && <div>
                parentID
            </div>}
        </div >
    )
}

export default ParentSignup