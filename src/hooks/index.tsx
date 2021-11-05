import React from "react";
import { dependencies, Dependencies } from "./dependencies";
import GlobalStateProvider from './global/Provider';

import { AuthHooksContext } from "./auth";
import { TodoHooksContext } from "./todo";
import * as authHooks from './auth/hooks';
import * as todoHooks from './todo/hooks';

export const DependenciesContext = React.createContext<Dependencies | null>(null);

export const useDependencies = (): Dependencies => {
    const context = React.useContext(DependenciesContext);
    if (!context) {
        throw new Error(`Context not instantiated.`);
    }
    return context;
};

type Props = {
    children?: React.ReactElement | React.ReactElement[];
};

const Provider = ({ children }: Props): React.ReactElement => {
    return (
        <DependenciesContext.Provider value={dependencies}>
            <GlobalStateProvider>
                <AuthHooksContext.Provider value={authHooks}>
                    <TodoHooksContext.Provider value ={todoHooks}>
                        {children}
                    </TodoHooksContext.Provider>
                </AuthHooksContext.Provider>
            </GlobalStateProvider>
        </DependenciesContext.Provider>
    )
};

export default Provider;
