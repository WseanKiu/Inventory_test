import { useCallback } from "react";
import { useGlobalState } from "../global";
import { AuthHooks } from ".";
import { useDependencies } from "..";

export const useLogin: AuthHooks['useLogin'] = (): {
    login: (loginId: string, password: string) => Promise<void>;
} => {
    const { authInteractor } = useDependencies();
    const { signIn } = authInteractor;
    const {
        useCurrentUser: { setCurrentUser }
    } = useGlobalState();
    
    const login = useCallback(async (loginId: string, password: string) => {
        await signIn(loginId, password);
        setCurrentUser({ loginId, password });
    }, []);

    return { login };
};

export const useLogout: AuthHooks['useLogout'] = (): {
    logout: () => Promise<void>;
} => {
    const { authInteractor } = useDependencies();
    const { signOut } = authInteractor;
    const {
        useCurrentUser: { setCurrentUser }
    } = useGlobalState();

    const logout = useCallback(async () => {
        await signOut();
        setCurrentUser();
    }, []);

    return { logout };
};
