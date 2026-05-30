
function StudentPDSA() {
    return (
        <div className="w-full border rounded-3xl bg-white p-5">

            {/* Header */}
            <div className="w-full rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-50 to-indigo-50 p-5 flex items-center gap-4">

                <div className="w-[48px] h-[48px] rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl">
                    🔄
                </div>

                <div>
                    <h1 className="text-[21px] font-semibold text-violet-700">
                        PDCA Sikli
                    </h1>

                    <p className="text-sm text-gray-500">
                        Reja, bajar, tekshir, takomillashtir
                    </p>
                </div>
            </div>

            {/* Progress */}
            <div className="mt-6 flex items-center justify-between">

                {[1, 2, 3, 4].map((step, index) => (
                    <div
                        key={step}
                        className="flex items-center w-full"
                    >

                        {/* Circle */}
                        <div className={`min-w-[38px] h-[38px] rounded-full flex items-center justify-center text-sm font-semibold
                    ${step === 1
                                ? "bg-violet-500 text-white"
                                : "bg-gray-100 text-gray-500"
                            }`}
                        >
                            {step}
                        </div>

                        {/* Line */}
                        {index !== 3 && (
                            <div className="w-full h-[2px] bg-gray-200 mx-3 rounded-full"></div>
                        )}
                    </div>
                ))}

                <span className="ml-4 text-sm text-gray-500 whitespace-nowrap">
                    0/4
                </span>
            </div>

            {/* Cards */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Plan */}
                <div className="border border-blue-200 rounded-3xl overflow-hidden bg-white">

                    <div className="h-[58px] bg-blue-50 border-b border-blue-200 px-4 flex items-center gap-3">
                        <div className="w-[10px] h-[10px] rounded-full bg-blue-500"></div>

                        <h2 className="text-[17px] font-semibold text-gray-800">
                            Plan — Rejalashtirish
                        </h2>
                    </div>

                    <textarea
                        placeholder="Maqsad nima? Qanday yechim sinab ko'raman?"
                        className="w-full h-[130px] p-4 text-[14px] text-gray-700 outline-none resize-none"
                    ></textarea>
                </div>

                {/* Do */}
                <div className="border border-green-200 rounded-3xl overflow-hidden bg-white">

                    <div className="h-[58px] bg-green-50 border-b border-green-200 px-4 flex items-center gap-3">
                        <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>

                        <h2 className="text-[17px] font-semibold text-gray-800">
                            Do — Bajarish
                        </h2>
                    </div>

                    <textarea
                        placeholder="Reja bo'yicha nima qildim?"
                        className="w-full h-[130px] p-4 text-[14px] text-gray-700 outline-none resize-none"
                    ></textarea>
                </div>

                {/* Check */}
                <div className="border border-orange-200 rounded-3xl overflow-hidden bg-white">

                    <div className="h-[58px] bg-orange-50 border-b border-orange-200 px-4 flex items-center gap-3">
                        <div className="w-[10px] h-[10px] rounded-full bg-orange-500"></div>

                        <h2 className="text-[17px] font-semibold text-gray-800">
                            Check — Tekshirish
                        </h2>
                    </div>

                    <textarea
                        placeholder="Natijalar qanday? Reja bilan farqi?"
                        className="w-full h-[130px] p-4 text-[14px] text-gray-700 outline-none resize-none"
                    ></textarea>
                </div>

                {/* Act */}
                <div className="border border-violet-200 rounded-3xl overflow-hidden bg-white">

                    <div className="h-[58px] bg-violet-50 border-b border-violet-200 px-4 flex items-center gap-3">
                        <div className="w-[10px] h-[10px] rounded-full bg-violet-500"></div>

                        <h2 className="text-[17px] font-semibold text-gray-800">
                            Act — Takomillashtirish
                        </h2>
                    </div>

                    <textarea
                        placeholder="Keyingi qadamlar? Nima standartlashtirish kerak?"
                        className="w-full h-[130px] p-4 text-[14px] text-gray-700 outline-none resize-none"
                    ></textarea>
                </div>

            </div>
        </div>
    )
}

export default StudentPDSA