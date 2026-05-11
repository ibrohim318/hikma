import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [userName, setUserName] = useState("");

    return (
        <AuthContext.Provider value={{ userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
}

// custom hook
export const useAuth = () => useContext(AuthContext);