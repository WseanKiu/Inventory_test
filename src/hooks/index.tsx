import React from "react";
import { dependencies, Dependencies } from "./dependencies";

export const DependenciesContext = React.createContext<Dependencies | null>(null);

export const useDependencies = (): Dependencies => {
    const context = React.useContext(DependenciesContext);
    if (!context) {
        throw new Error(`Context not instantiated.`);
    }
    return context;
};