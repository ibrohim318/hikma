import { Navigate } from "react-router-dom";
import { getCookie } from "./utils/cookie";

export const ProtectedRoute = ({ children }) => {
    // ← ikkalasini tekshiradi
    const token = getCookie("token") || localStorage.getItem("token");
    if (!token) return <Navigate to="/" replace />;
    return children;
};

