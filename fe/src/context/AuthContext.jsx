import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser({
            username: userData.username,
            token: userData.token, // Simpan token
            role: userData.role,
        });
    };

    const logout = () => {
        setUser(null); // Reset state user
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};