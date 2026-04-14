import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6"

import { useNavigate } from "react-router-dom"

function StudentSignup() {
    const navigate = useNavigate()

    const [gender, setGender] = useState("")
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", birthDate: "", region: "", district: "", })
    const [errors, setErrors] = useState({})
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    const handleSubmit = async () => {


    }

    return (
        <div className="w-full h-[640px] border border-gray-300 rounded-xl shadow-md p-5">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-[30px] h-[30px] rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
                <div className="w-[70px] h-[2px] bg-gray-200 "></div>
                <div className="w-[30px] h-[30px] rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">2</div>
            </div>

            <div>
                <h1 className="text-lg font-semibold">Shaxsiy ma'lumotlar</h1>
                <p className="text-sm text-gray-500">Ma'lumotlaringizni to'ldiring</p>

                <div className="mt-3 ">
                    {/* Ism + Familiya */}
                    <div data-aos="fade-left" className="w-full flex gap-4">
                        <div className="w-1/2">
                            <h3 className="text-sm">Ism</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.firstName ? "border-red-500" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200`}>
                                <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="Ism" className="w-full bg-transparent focus:outline-none" />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <h3 className="text-sm">Familiya</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.lastName ? "border-red-500" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200`}>
                                <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Familiya" className="w-full bg-transparent focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* Telefon */}
                    <div data-aos="fade-left" className="w-full mt-5">
                        <h3 className="text-sm">Telefon raqam</h3>
                        <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.phone ? "border-red-500" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200`}>
                            <input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+998 90 123 45 67" className="w-full bg-transparent focus:outline-none" />
                        </div>
                    </div>

                    {/* Gender */}
                    <div data-aos="fade-left" className="mt-5">
                        <h3 className="text-sm mb-2">Jins <span className="text-red-500">*</span></h3>
                        <div className="flex gap-4">
                            <div onClick={() => setGender("male")} className={`w-1/2 h-[40px] flex items-center justify-center gap-2 rounded-xl cursor-pointer border transition-all duration-200 ${gender === "male" ? "border-blue-500 bg-blue-100 text-blue-600" : "border-gray-300 bg-gray-100 text-gray-600"}`}>
                                <span>👦</span>
                                <span>Erkak</span>
                            </div>

                            <div onClick={() => setGender("female")} className={`w-1/2 h-[40px] flex items-center justify-center gap-2 rounded-xl cursor-pointer border transition-all duration-200 ${gender === "female" ? "border-blue-500 bg-blue-100 text-blue-600" : "border-gray-300 bg-gray-100 text-gray-600"}`}>
                                <span>👧</span>
                                <span>Ayol</span>
                            </div>
                        </div>

                        {errors.gender && <p className="text-red-500 text-xs mt-1">Jins tanlang</p>}
                    </div>

                    {/* Tug'ilgan sana */}
                    <div data-aos="fade-left" className="w-full mt-5">
                        <h3 className="text-sm">Tug'ilgan sana</h3>
                        <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.birthDate ? "border-red-500" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200`}>
                            <input type="date" value={form.birthDate} onChange={(e) => setForm({ ...form, birthDate: e.target.value })} className="w-full bg-transparent focus:outline-none" />
                        </div>
                    </div>

                    {/* Region + District */}
                    <div data-aos="fade-left" className="w-full flex gap-4 mt-6">
                        <div className="w-1/2">
                            <h3 className="text-sm">Viloyat</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.region ? "border-red-500" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200`}>
                                <select
                                    value={form.region}
                                    onChange={(e) => setForm({ ...form, region: e.target.value })}
                                    className="w-full h-full bg-transparent focus:outline-none">
                                    <option value="">Tanlang</option>
                                    <option value="Toshkent shahri">Toshkent shahri</option>
                                    <option value="Toshkent viloyati">Toshkent viloyati</option>
                                    <option value="Andijon viloyati">Andijon viloyati</option>
                                    <option value="Farg'ona viloyati">Farg'ona viloyati</option>
                                    <option value="Namangan viloyati">Namangan viloyati</option>
                                    <option value="Samarqand viloyati">Samarqand viloyati</option>
                                    <option value="Buxoro viloyati">Buxoro viloyati</option>
                                    <option value="Xorazm viloyati">Xorazm viloyati</option>
                                    <option value="Qashqadaryo viloyati">Qashqadaryo viloyati</option>
                                    <option value="Surxondaryo viloyati">Surxondaryo viloyati</option>
                                    <option value="Navoiy viloyati">Navoiy viloyati</option>
                                    <option value="Jizzax viloyati">Jizzax viloyati</option>
                                    <option value="Sirdaryo viloyati">Sirdaryo viloyati</option>
                                    <option value="Qoraqalpog'iston Respublikasi">Qoraqalpog'iston Respublikasi</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <h3 className="text-sm">Tuman</h3>
                            <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.district ? "border-red-500" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200`}>
                                <input type="text" value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} placeholder="Tuman" className="w-full bg-transparent focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <button onClick={handleSubmit} disabled={loading} className="w-full h-[45px] rounded-xl bg-blue-700 mt-6 flex items-center gap-3 justify-center text-white font-semibold">
                        {loading ? "Yuborilmoqda..." : "Davom etish"}
                        <FaArrowRight />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default StudentSignup