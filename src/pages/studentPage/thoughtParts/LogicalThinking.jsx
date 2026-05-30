import { LuBrain } from "react-icons/lu";

function LogicalThinking() {
    return (
        <div>

            <div className="w-full rounded-[18px] border border-violet-200/70 bg-[#f7f5ff] px-4 py-4 flex items-start justify-between">
                <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-[0_8px_20px_rgba(139,92,246,0.18)]"><LuBrain className="text-[20px]" /></div>
                    <div>
                        <h2 className="text-[16px] font-semibold tracking-[-0.2px] text-violet-700">Mantiqiy Fikrlash</h2>
                        <div className="mt-1.5 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-500">Logical Thinking</div>
                        <p className="mt-3 max-w-[950px] text-[14px] leading-6 text-gray-700"> A &gt; B va B &gt; C bo&apos;lsa, A va C orasida qanday munosabat bor? O&apos;z fikrlash jarayoningizni bosqichma-bosqich yozing.</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[12px] font-medium text-gray-600 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                    Vazifa
                </div>
            </div>

            <div className="mt-5">

                {/* Title */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center text-[15px] font-semibold">
                        2
                    </div>

                    <h3 className="text-[16px] font-semibold text-gray-800">
                        Javobingizni yozing
                    </h3>
                </div>

                {/* Textarea */}
                <div className="mt-4"><textarea placeholder="Fikringizni erkin yozing... Xato javob yo'q — muhimi o'ylash jarayoni." className="w-full h-[160px] resize-none rounded-[22px] border-2 border-sky-400/80 bg-white px-5 py-4 text-[15px] leading-7 text-gray-700 outline-none placeholder:text-gray-400 focus:border-sky-500 transition-all duration-300" /></div>
                <p className="mt-4 text-[14px] text-gray-500">0 belgi · sabab, xulosa so&apos;zlari tahlilga ta&apos;sir qiladi</p>
                <button className="mt-5 w-full rounded-[20px] bg-[#c49af7] py-4 text-[18px] font-semibold text-white transition-all duration-300 hover:opacity-90">Fikrimni yuborish →</button>
            </div>
        </div>
    );
}

export default LogicalThinking;