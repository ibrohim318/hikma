import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../utils/cookie"; // ✅ faqat shu

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        deleteCookie("token"); // ✅ js-cookie emas, utildan
        navigate("/");
    };

    return (
        <div className="p-5">
            <h1 className="text-xl">parent Dashboard</h1>
            <button onClick={handleLogout} className="mt-5 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
        </div>
    );
}

export default Dashboard;