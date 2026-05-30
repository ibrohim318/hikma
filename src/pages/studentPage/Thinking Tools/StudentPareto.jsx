
function StudentPareto() {
    return (
        <div className="w-full border rounded-3xl bg-white p-5">

            {/* Header */}
            <div className="w-full rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 p-5 flex items-center gap-4">

                <div className="w-[48px] h-[48px] rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl">
                    📊
                </div>

                <div>
                    <h1 className="text-[21px] font-semibold text-orange-600">
                        Pareto 80/20
                    </h1>

                    <p className="text-sm text-gray-500">
                        Muhim 20% ni ajrating
                    </p>
                </div>
            </div>

            {/* Info */}
            <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 flex items-center gap-3">
                <span className="text-base">💡</span>

                <p className="text-[14px] text-orange-700">
                    Pareto: Vazifalarning 20% — natijalarning 80% ini beradi.
                    Muhimligiga 1-5 baho bering.
                </p>
            </div>

            {/* Tasks */}
            <div className="mt-5 space-y-3">

                {/* Item */}
                {[5, 4, 4, 1].map((level, index) => (
                    <div
                        key={index}
                        className={`w-full min-h-[68px] rounded-2xl border px-4 py-3 flex items-center justify-between transition-all
                ${index === 0
                                ? "border-orange-300 bg-orange-50"
                                : "border-gray-200 bg-white hover:border-orange-200"
                            }`}
                    >

                        <div className="flex items-center gap-4">

                            {/* Number */}
                            <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-sm font-semibold
                    ${index === 0
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 text-gray-600"
                                }`}>
                                {index + 1}
                            </div>

                            {/* Title */}
                            <p className="text-[15px] font-medium text-gray-800">
                                {
                                    [
                                        "Fokus sessiyasi o'tkazish",
                                        "Yangi so'zlar yodlash",
                                        "Kitob o'qish",
                                        "Ijtimoiy tarmoqlar"
                                    ][index]
                                }
                            </p>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4">

                            {/* Dots */}
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((dot) => (
                                    <div
                                        key={dot}
                                        className={`w-[10px] h-[10px] rounded-full
                                ${dot <= level
                                                ? "bg-orange-500"
                                                : "bg-gray-200"
                                            }`}
                                    ></div>
                                ))}
                            </div>

                            {/* Badge */}
                            {index === 0 && (
                                <div className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                                    Asosiy
                                </div>
                            )}

                            {/* Delete */}
                            <button className="text-gray-400 hover:text-red-500 transition-all text-sm">
                                🗑
                            </button>
                        </div>
                    </div>
                ))}

            </div>

            {/* Add Task */}
            <div className="mt-5 border border-gray-200 rounded-3xl p-4">

                <input
                    type="text"
                    placeholder="Yangi vazifa..."
                    className="w-full h-[50px] rounded-2xl border border-gray-200 px-4 text-[14px] outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-300 transition-all"
                />

                <div className="mt-4 flex items-center justify-between flex-wrap gap-4">

                    {/* Priority */}
                    <div className="flex items-center gap-2 flex-wrap">

                        <span className="text-sm text-gray-500">
                            Muhimlik:
                        </span>

                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                className={`w-[36px] h-[36px] rounded-xl text-sm font-medium transition-all
                        ${num <= 3
                                        ? "bg-orange-500 text-white"
                                        : "bg-gray-100 text-gray-500 hover:bg-orange-100"
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>

                    {/* Add Button */}
                    <button className="h-[42px] px-5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-all shadow-sm">
                        + Qo'shish
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StudentPareto