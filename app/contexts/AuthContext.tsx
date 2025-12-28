'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    function login() {
        setIsAuthenticated(true);
        router.push('/home');
    }

    function logout() {
        setIsAuthenticated(false);
        router.push('/login');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
