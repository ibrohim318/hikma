import { deleteCookie } from "../../utils/cookie";
 
import { useContext } from "react";


function Dashboard() {
    

    const handleLogout = () => {
        localStorage.removeItem("token");
        deleteCookie("token");
        window.location.href = "/";  // ← shu qator o'zgaradi
    };

    return (
        <div className="p-5">
            <h1 className="text-xl">Dashboard</h1>
            <p className="text-lg">Welcome, {name}!</p>
            <button onClick={handleLogout} className="mt-5 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
        </div>
    );
}

export default Dashboard;