import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [userName, setUserName] = useState(
        localStorage.getItem("userName") || ""
    );
    const updateUserName = (name) => {
        setUserName(name);
        localStorage.setItem("userName", name);
    };

    const [lastName, setLastname] = useState(
        localStorage.getItem("lastName") || ""  // ← "a" olib tashlandi, || "" qo'shildi
    );
    const updateLastName = (lastName) => {
        setLastname(lastName);
        localStorage.setItem("lastName", lastName);
    };

    const [userPhone, setUserPhone] = useState(
        localStorage.getItem("phone") || ""  // ← "a" olib tashlandi, || "" qo'shildi
    );

    const updatePhone = (userPhone) => {
        setUserPhone(userPhone);                    // ← setLastname emas
        localStorage.setItem("phone", userPhone);  // ← "lastName" emas
    };

    return (
        <AuthContext.Provider value={{
            userName, setUserName: updateUserName,
            lastName, setLastname: updateLastName,
            userPhone, setUserPhone: updatePhone
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);