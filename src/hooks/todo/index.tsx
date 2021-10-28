import { createContext, useContext } from "react";
import { Todo } from '../../domain/entities/todo';

export type TodoHooks = {
    useFetchTodos: () => {
        fetchTodos: () => Promise<Todo[]>;
    };
};

export const TodoHooksContext = createContext<TodoHooks | null>(null);

export const useTodoHooks = (): TodoHooks => {
    const context = useContext(TodoHooksContext);
    if (!context) {
        throw new Error(`Context not instantiated.`);
    }

    return context;
}
