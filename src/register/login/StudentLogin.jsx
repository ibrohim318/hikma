import { id } from "date-fns/locale"
import { useState } from "react"

function StudentLogin() {
    const [errors, setErrors] = useState({})
    const handleSubmit = () => {
        console.log("ishladi");
    }
    const [form, setForm] = useState({ id: "" })
    return (
        <div className="w-full h-[300px] border border-gray-300 rounded-xl shadow-md p-6">
            <div>
                <h1 className="text-xl font-semibold">Tizimga kirish</h1>
                <p className="text-sm text-gray-400 font-medium mt-0.5">IDR ID orqali kiring</p>
            </div>
            <div className="mt-[25px]">
                <p className="text-lg font-medium">IDR ID raqami</p>
                <div className={`w-full h-[39px] bg-gray-100 rounded-lg mt-2 flex items-center px-3 border ${errors.id ? "border-red-500" : "border-transparent"} focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200`}>
                    <input type="text" placeholder="IDR-2024-XXXX" value={form.id} onChange={(e) => setForm({ ...id, firstName: e.target.value })} className="w-full h-full focus:outline-none bg-gray-100" />
                </div>
                <span className="text-gray-300 text-sm  ">Namuna: IDR-2024-4521 (demo uchun istalgan ID kiriting)</span>

                <button onClick={handleSubmit} className="w-full h-[45px] rounded-xl bg-blue-700 hover:bg-blue-700 mt-6 flex items-center gap-3 justify-center text-white font-semibold ">Kirish</button>
            </div>
        </div>
    )
}

export default StudentLogin