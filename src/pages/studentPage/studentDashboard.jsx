// icons
import { LuBrain } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";
import { RiFocus2Line } from "react-icons/ri";

import { useAuth } from "@/context/AuthContext";

function StudentDashboard() {
    // user infos
    const { userName, lastName, userPhone } = useAuth();


    return (
        <div className="p-3">
            <div>
                <div>
                    <h1 className="text-lg font-semibold ">Xush kelibsiz, {userName}!</h1>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard