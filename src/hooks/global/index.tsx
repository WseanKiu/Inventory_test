import { createContext, useContext } from "react";

export type GlobalState = {
    useCurrentUser: {
        currentUser: object | undefined;
        setCurrentUser: (user?: object) => void;
    };
};

export const GLobalStateContext = createContext<GlobalState | null>(null);

export const useGlobalState = (): GlobalState => {
    const context = useContext(GLobalStateContext);
    if (!context) {
        throw new Error(`Context not instantiated.`);
    }
    return context;
};
