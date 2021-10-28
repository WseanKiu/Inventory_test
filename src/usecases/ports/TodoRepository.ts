import {
    Todo,
    CreateTodoProps,
    UpdateTodoProps,
} from '../../domain/entities/todo';

export default interface TodoRepository {
    find(params: {
        userId: string;
        page?: number;
        limit?: number;
    }): Promise<Todo[]>;
    findById(id: string): Promise<Todo | undefined>;
    insert(todo: CreateTodoProps): Promise<Todo>;
    update(id: string, todo: UpdateTodoProps): Promise<void>;
}