
function SelfAwareness() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-3">
            <p className="text-slate-500 text-sm mb-5">
                O'zingizni chuqur tushunish uchun quyidagi savollarga javob bering:
            </p>

            <div className="space-y-5">

                {/* 1 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <h3 className="text-[17px] font-medium text-slate-800 mb-3">
                        1. Bugun qanday his-tuyg'ularni sezdim va ular nimaga bog'liq edi?
                    </h3>

                    <textarea
                        rows={4}
                        placeholder="Erkin yozing..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                </div>

                {/* 2 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <h3 className="text-[17px] font-medium text-slate-800 mb-3">
                        2. O'zimda eng ko'p yoqtirgan xususiyatim nima?
                    </h3>

                    <textarea
                        rows={4}
                        placeholder="Erkin yozing..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                </div>

                {/* 3 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <h3 className="text-[17px] font-medium text-slate-800 mb-3">
                        3. Hozirgi kunda qaysi vaziyat meni eng ko'p tashvishlantirmoqda?
                    </h3>

                    <textarea
                        rows={4}
                        placeholder="Erkin yozing..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                </div>

            </div>
        </div>
    )
}

export default SelfAwareness