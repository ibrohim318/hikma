
function StudentFiveWhy() {
    return (
        <div className="w-full rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* TOP HEADER */}
            <div className="px-6 py-4 bg-gradient-to-r from-violet-50 to-indigo-50 border-b border-violet-100">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-violet-100 flex items-center justify-center text-2xl">
                        🔎
                    </div>

                    <div>
                        <h2 className="text-[20px] font-semibold text-violet-700">
                            5 Nima Uchun
                        </h2>

                        <p className="text-sm text-violet-500 mt-1">
                            Muammoning ildiz sababini topish
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                {/* EXAMPLE */}
                <div className="rounded-3xl border border-gray-200 overflow-hidden mb-8">
                    <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                            5 NIMA UCHUN — ILDIZ SABABGACHA TUSHISH
                        </h3>
                    </div>

                    <div className="p-5">
                        <p className="text-sm text-gray-700 mb-5">
                            <span className="font-semibold">Hayotiy misol:</span>{" "}
                            <span className="text-gray-500">
                                "Bu hafta darslarni o‘tkazib yubordim"
                            </span>
                        </p>

                        <div className="space-y-3">
                            {/* MUAMMO */}
                            <div className="flex gap-4 items-start">
                                <div className="w-4 pt-5 flex justify-center">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                </div>

                                <div className="flex-1 rounded-2xl border border-red-200 bg-red-50 px-4 py-4">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-red-600">
                                            Muammo:
                                        </span>{" "}
                                        Bu hafta darslarni o‘tkazib yubordim
                                    </p>
                                </div>
                            </div>

                            {/* 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-4 pt-5 flex justify-center">
                                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                </div>

                                <div className="flex-1 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-4">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-orange-600">
                                            1-sabab:
                                        </span>{" "}
                                        Uyqum to‘ymagan edim
                                    </p>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-4 pt-5 flex justify-center">
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                </div>

                                <div className="flex-1 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-amber-600">
                                            2-sabab:
                                        </span>{" "}
                                        Kechasi kech uxlagandim
                                    </p>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-4 pt-5 flex justify-center">
                                    <div className="w-3 h-3 rounded-full bg-lime-500"></div>
                                </div>

                                <div className="flex-1 rounded-2xl border border-lime-200 bg-lime-50 px-4 py-4">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-lime-700">
                                            3-sabab:
                                        </span>{" "}
                                        Telefonni qo‘yolmadim
                                    </p>
                                </div>
                            </div>

                            {/* 4 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-4 pt-5 flex justify-center">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                </div>

                                <div className="flex-1 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-emerald-700">
                                            4-sabab:
                                        </span>{" "}
                                        Bildirishnomalar uzilmagan edi
                                    </p>
                                </div>
                            </div>

                            {/* ROOT */}
                            <div className="flex gap-4 items-start">
                                <div className="w-4 pt-5 flex justify-center">
                                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                                </div>

                                <div className="flex-1 rounded-2xl border border-teal-200 bg-teal-50 px-4 py-4">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold text-teal-700">
                                            5-ildiz sabab ✔:
                                        </span>{" "}
                                        Telefon tartibini o‘rnatmagan edim — BU O‘ZGARTIRILADI!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* INFO */}
                        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4">
                            <p className="text-sm text-blue-700 leading-relaxed">
                                <span className="font-semibold">
                                    💡 Asosiy qoida:
                                </span>{" "}
                                Ildiz sabab topilganda — shu bir narsani hal qilsangiz,
                                barcha muammo zanjiri yechiladi.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        O‘z muammoingizni tahlil qiling
                    </h3>

                    <div className="relative">
                        {/* LINE */}
                        <div className="absolute left-[8px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

                        <div className="space-y-5">
                            {/* MUAMMO */}
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-red-500 border-4 border-white shadow"></div>

                                <div className="rounded-3xl border border-red-200 bg-red-50 overflow-hidden">
                                    <div className="px-5 py-3 border-b border-red-100">
                                        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                                            Muammo
                                        </p>
                                    </div>

                                    <div className="p-5">
                                        <input
                                            type="text"
                                            placeholder="Qanday muammo bor? Masalan: haftalab kitob o‘qimayapman"
                                            className="w-full h-[52px] rounded-2xl border border-red-100 bg-white px-4 text-sm outline-none transition-all focus:border-red-400 focus:ring-4 focus:ring-red-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* STEP 1 */}
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow"></div>

                                <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                                    <div className="px-5 py-3 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-700">
                                            ↳ Nima uchun?
                                        </p>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-xs font-semibold text-orange-500 uppercase mb-3">
                                            1-sabab
                                        </p>

                                        <input
                                            type="text"
                                            placeholder="Nima uchun?"
                                            className="w-full h-[52px] rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-all focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow"></div>

                                <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                                    <div className="px-5 py-3 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-700">
                                            ↳ Nima uchun?
                                        </p>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-xs font-semibold text-amber-500 uppercase mb-3">
                                            2-sabab
                                        </p>

                                        <input
                                            type="text"
                                            placeholder="Nima uchun?"
                                            className="w-full h-[52px] rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-lime-500 border-4 border-white shadow"></div>

                                <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                                    <div className="px-5 py-3 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-700">
                                            ↳ Nima uchun?
                                        </p>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-xs font-semibold text-lime-600 uppercase mb-3">
                                            3-sabab
                                        </p>

                                        <input
                                            type="text"
                                            placeholder="Nima uchun?"
                                            className="w-full h-[52px] rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-all focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* STEP 4 */}
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow"></div>

                                <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                                    <div className="px-5 py-3 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-700">
                                            ↳ Nima uchun?
                                        </p>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-xs font-semibold text-emerald-600 uppercase mb-3">
                                            4-sabab
                                        </p>

                                        <input
                                            type="text"
                                            placeholder="Nima uchun?"
                                            className="w-full h-[52px] rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-all focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ROOT */}
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow"></div>

                                <div className="rounded-3xl border border-teal-200 bg-teal-50 overflow-hidden">
                                    <div className="px-5 py-3 border-b border-teal-100">
                                        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                                            Ildiz sabab
                                        </p>
                                    </div>

                                    <div className="p-5">
                                        <input
                                            type="text"
                                            placeholder="Asosiy ildiz sabab nima?"
                                            className="w-full h-[52px] rounded-2xl border border-teal-100 bg-white px-4 text-sm outline-none transition-all focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentFiveWhy