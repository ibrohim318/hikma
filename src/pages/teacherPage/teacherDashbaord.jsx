import { deleteCookie } from "../../utils/cookie";

function teacherDashbaord() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        deleteCookie("token");
        window.location.href = "/";
    };

    return (
        <div>
            <h1>teacherDashbaord</h1>
            <button onClick={handleLogout} className="mt-5 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
        </div>
    )
}

export default teacherDashbaord