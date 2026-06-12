
function Skills() {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-6">
            <p className="text-sm text-slate-500 mb-6">
                Qaysi ko'nikmalaringiz bor? 1-5 baho bering.
            </p>

            <div className="space-y-4">

                {/* Skill Item */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <h3 className="text-[16px] font-medium text-slate-800">
                        Ingliz tili
                    </h3>

                    <div className="flex items-center gap-2">
                        <button className="w-9 h-9 rounded-xl bg-sky-500 text-white text-sm font-medium">
                            1
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-sky-500 text-white text-sm font-medium">
                            2
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-slate-200 text-slate-600 text-sm font-medium">
                            3
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-slate-200 text-slate-600 text-sm font-medium">
                            4
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-slate-200 text-slate-600 text-sm font-medium">
                            5
                        </button>

                        <button className="ml-2 text-slate-400 hover:text-red-500 transition">
                            🗑️
                        </button>
                    </div>
                </div>

                {/* Skill Item */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <h3 className="text-[16px] font-medium text-slate-800">
                        Jamoada ishlash
                    </h3>

                    <div className="flex items-center gap-2">
                        <button className="w-9 h-9 rounded-xl bg-sky-500 text-white text-sm font-medium">
                            1
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-sky-500 text-white text-sm font-medium">
                            2
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-sky-500 text-white text-sm font-medium">
                            3
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-sky-500 text-white text-sm font-medium">
                            4
                        </button>
                        <button className="w-9 h-9 rounded-xl bg-slate-200 text-slate-600 text-sm font-medium">
                            5
                        </button>

                        <button className="ml-2 text-slate-400 hover:text-red-500 transition">
                            🗑️
                        </button>
                    </div>
                </div>

                {/* Add Skill */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Ko'nikma nomi..."
                        className="flex-1 h-12 rounded-2xl border border-slate-200 px-4 outline-none focus:border-sky-500"
                    />

                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                className={`w-10 h-10 rounded-xl text-sm font-medium ${num <= 3
                                    ? "bg-sky-500 text-white"
                                    : "bg-slate-200 text-slate-600"
                                    }`}
                            >
                                {num}
                            </button>
                        ))}

                        <button className="w-12 h-12 rounded-2xl bg-sky-500 text-white text-2xl hover:bg-sky-600 transition">
                            +
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills