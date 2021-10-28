import { createContext, useContext } from "react";

export type AuthHooks = {
    useLogin: () => {
        login: (loginId: string, password: string) => Promise<void>;
    };
    useLogout: () => {
        logout: () => Promise<void>;
    };
};

export const AuthHooksContext = createContext<AuthHooks | null>(null);

export const useAuthHooks = (): AuthHooks => {
    const context = useContext(AuthHooksContext);
    if(!context) {
        throw new Error(`Context not instantiated.`);
    }
    return context;
}
