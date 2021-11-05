import { useCallback } from "react";
import { TodoHooks } from ".";
import { useDependencies } from '..';
import { Todo } from "../../domain/entities/todo";

export const useFetchTodos: TodoHooks['useFetchTodos'] = (): {
    fetchTodos: () => Promise<Todo[]>;
} => {
    const { todoInteractor } = useDependencies();
    const fetchTodos = useCallback(async () => {
        const todos = await todoInteractor.fetchTodos({
            userId: 'sample-user-id',
        });
        return todos;
    }, []);

    return { fetchTodos };
}
