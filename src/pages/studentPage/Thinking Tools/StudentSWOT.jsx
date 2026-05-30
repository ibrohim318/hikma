import { useState } from "react";

// axios
import Post from "../../../CRUD/Post"

// loader
import { RotatingLines } from "react-loader-spinner";


function StudentSWOT() {
    // post data
    const { generateSwot, loading, result, error } = Post();

    // inputs
    const [strength, setStrength] = useState("")
    const [weak, setWeak] = useState("")
    const [oportunites, setOpportunites] = useState("")
    const [threat, setThreat] = useState("")

    function handleSubmit() {
        generateSwot({
            topic: "Mening SWOT tahlilim",
            strengths: [strength],
            weaknesses: [weak],
            opportunities: [oportunites],
            threats: [threat]
        });
    }

    return (
        <div>
            <div className="w-full h-[60px] border rounded-lg bg-[#f5f3ff] px-4 py-1 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                    <h1 className="text-[#804bee] font-semibold">SWOT</h1>
                    <h3 className="text-[#b897fe] text-[13px]">Kuchli/zaif tomonlar, imkoniyat, tahdid</h3>
                </div>
            </div>

            <div className="w-full rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden mt-5">
                {/* HEADER */}
                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50">
                    <h2 className="text-[15px] font-semibold tracking-wide text-gray-700 uppercase">SWOT — Tuzilishi va Maqsadi</h2>
                </div>

                <div className="p-6">
                    {/* TOP EXAMPLE */}
                    <div className="mb-8">
                        <p className="text-sm text-gray-700 mb-4"><span className="font-semibold">Hayotiy misol:</span>{" "} <span className="text-gray-500">"Respublika olimpiadasiga qatnashish kerakmi?"</span></p>
                        <div className="rounded-2xl overflow-hidden border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* S */}
                                <div className="p-5 bg-emerald-50 border-b md:border-r border-gray-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold">S</div>
                                        <h3 className="font-semibold text-emerald-700">S — Kuchli</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">Fizika fanidan bahom "5", mustaqil o‘qishga odatlanganman</p>
                                </div>

                                {/* W */}
                                <div className="p-5 bg-red-50 border-b border-gray-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-semibold">W</div>
                                        <h3 className="font-semibold text-red-700">W — Zaif</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">Matematikam bo‘sh, stressda diqqatim tarqaladi</p>
                                </div>

                                {/* O */}
                                <div className="p-5 bg-sky-50 md:border-r border-gray-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm font-semibold">O</div>
                                        <h3 className="font-semibold text-sky-700">O — Imkoniyat</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">G‘olib bo‘lsam grant olaman, ustoz tayyorlay oladi</p>
                                </div>

                                {/* T */}
                                <div className="p-5 bg-orange-50">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold">T</div>
                                        <h3 className="font-semibold text-orange-700">T — Tahdid</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">Asosiy fanlar ta’sir topishi mumkin, raqobat kuchli</p>
                                </div>
                            </div>
                        </div>

                        {/* LABELS */}
                        <div className="flex items-center justify-between mt-3 px-1">
                            <p className="text-xs text-gray-500">↑ Ichki omillar (o‘zingdan)</p>
                            <p className="text-xs text-gray-500">Tashqi omillar (muhitdan) ↑</p>
                        </div>
                        {/* RESULT */}
                        <div className="mt-4 rounded-2xl bg-blue-50 border border-blue-100 px-4 py-4">
                            <p className="text-sm leading-relaxed text-blue-700"> <span className="font-semibold">💡 Xulosa:</span> Kuchli va imkoniyat tomonlar yetakchi bo‘lsa — ishonch bilan qatnash. Zaif va tahdid tomonlar ko‘p bo‘lsa — avval tayyorgarlik ko‘r.</p>
                        </div>
                    </div>

                    {/* SWOT INPUTS */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-5">To‘rtta tomonni to‘ldiring</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {/* S */}
                            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 overflow-hidden">
                                <div className="p-5 border-b border-emerald-100">
                                    <div className="flex items-start gap-3">
                                        <div className="min-w-[42px] h-[42px] rounded-xl bg-emerald-500 text-white flex items-center justify-center font-semibold shadow-sm">S</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Kuchli tomonlar</h4>
                                            <p className="text-sm text-gray-500 mt-1">Nimada yaxshiman? Qanday afzalliklarim bor?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-sm text-gray-400 mb-4">Masalan: matematika, sabr-toqat, jamoada ishlash...</p>
                                    <div className="flex items-center gap-3">
                                        <input type="text" placeholder="Qo‘shish..." value={strength} onChange={(e) => setStrength(e.target.value)} className="flex-1 h-[48px] rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />
                                    </div>
                                </div>
                            </div>

                            {/* W */}
                            <div className="rounded-3xl border border-red-200 bg-red-50/50 overflow-hidden">
                                <div className="p-5 border-b border-red-100">
                                    <div className="flex items-start gap-3">
                                        <div className="min-w-[42px] h-[42px] rounded-xl bg-red-500 text-white flex items-center justify-center font-semibold shadow-sm">W</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Zaif tomonlar</h4>
                                            <p className="text-sm text-gray-500 mt-1">Nimani yaxshilash kerak? Qayerda orqada qolaman?</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <p className="text-sm text-gray-400 mb-4">Masalan: vaqt boshqaruvi, ingliz tili...</p>
                                    <div className="flex items-center gap-3">
                                        <input type="text" placeholder="Qo‘shish..." value={weak} onChange={(e) => setWeak(e.target.value)} className="flex-1 h-[48px] rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-red-400 focus:ring-4 focus:ring-red-100" />
                                    </div>
                                </div>
                            </div>

                            {/* O */}
                            <div className="rounded-3xl border border-sky-200 bg-sky-50/50 overflow-hidden">
                                <div className="p-5 border-b border-sky-100">
                                    <div className="flex items-start gap-3">
                                        <div className="min-w-[42px] h-[42px] rounded-xl bg-sky-500 text-white flex items-center justify-center font-semibold shadow-sm">O</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Imkoniyatlar</h4>
                                            <p className="text-sm text-gray-500 mt-1">Qanday imkoniyatlardan foydalana olaman?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-sm text-gray-400 mb-4">Masalan: olimpiada, yangi kurs, mentor...</p>
                                    <div className="flex items-center gap-3">
                                        <input type="text" placeholder="Qo‘shish..." value={oportunites} onChange={(e) => setOpportunites(e.target.value)} className="flex-1 h-[48px] rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-sky-400 focus:ring-4 focus:ring-sky-100" />
                                    </div>
                                </div>
                            </div>

                            {/* T */}
                            <div className="rounded-3xl border border-orange-200 bg-orange-50/50 overflow-hidden">
                                <div className="p-5 border-b border-orange-100">
                                    <div className="flex items-start gap-3">
                                        <div className="min-w-[42px] h-[42px] rounded-xl bg-orange-500 text-white flex items-center justify-center font-semibold shadow-sm">T</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Tahdidlar</h4>
                                            <p className="text-sm text-gray-500 mt-1">Nima xalaqit berishi mumkin? Qanday to‘siqlar bor?</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <p className="text-sm text-gray-400 mb-4">Masalan: vaqt bosimi, raqobat, moliyaviy cheklov...</p>
                                    <div className="flex items-center gap-3">
                                        <input type="text" placeholder="Qo‘shish..." value={threat} onChange={(e) => setThreat(e.target.value)} className="flex-1 h-[48px] rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full h-11 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium text-sm shadow-lg shadow-green-500/20 hover:from-emerald-600 hover:to-green-700 hover:shadow-green-500/30 active:scale-[0.98] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-80 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>

                                        (<RotatingLines
                                            visible={true}
                                            height="36"
                                            width="36"
                                            color="white"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            ariaLabel="rotating-lines-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />)
                                        <span>Yuborilmoqda...</span>
                                    </>
                                ) : (
                                    "SWOT tahlil qilish"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSWOT  