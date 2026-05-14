import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "./utils/cookie";

export const ProtectedRoute = () => {
    const token = getCookie("token") || localStorage.getItem("token");
    if (!token) return <Navigate to="/" replace />;
    return <Outlet />; // ← children o'rniga Outlet
};