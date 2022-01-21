import { createContext, useCallback, useContext, useState } from "react";

import { v4 as uuid } from "uuid";

interface SignInCredntials {
    email: string;
    password: string;
}

interface User {
    id: string;
    name: string;
    cpf: number;
    birthdate: number;
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number?: number;
    email: string;
    password: string;
}


interface AuthContextData {
    token: { token: string};
    user: User;
    signIn(credentials: SignInCredntials): Promise<void>;
    signOut(): void;
    createUser(user: User): void;
    updateUser(user: User): void;
}

interface AuthState {
    user: User;
}

interface AuthStateToken {
    token: string;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState<AuthStateToken>(() => {
        const tokenData = localStorage.getItem("@healthy:token");

        if(tokenData) {
            return { token: tokenData };
        }

        return {} as AuthStateToken;
    });

    const [data, setData] = useState<AuthState>(() => {
        const user = localStorage.getItem("@healthy:user");

        if(user) {
            return{ user: JSON.parse(user)};
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const dataLogin = localStorage.getItem("@healthy:user");
        const tokenId = uuid();

        if(dataLogin) {
            const user: User = JSON.parse(dataLogin);
            if (user.email === email && user.password === password) {
                localStorage.setItem("@healthy:token", tokenId);
                setToken({ token: tokenId });
            }
        }
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem("@healthy:token");

        setToken({ token: ''});
    }, []);
    
    
    const createUser = useCallback(
        (user: User) => {
        setData({
            user,
        });
        localStorage.setItem('@healthy:user', JSON.stringify(user));
        },

        [setData],
    );

    const updateUser = useCallback(
        (user: User) => {
        setData({
            user,
        });
        localStorage.setItem('@healthy:user', JSON.stringify(user));
        },

        [setData],
    );

    return (
        <AuthContext.Provider
        value={{
            token,
            user: data.user,
            signIn,
            signOut,
            createUser,
            updateUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
} 

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
  
    return context;
  }
  