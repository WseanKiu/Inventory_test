import { BaseModel } from './baseModel';

export type Todo = {
    title: string;
    userId: string;
    description: string;
    done: boolean;
} & BaseModel;

export type CreateTodoProps = Pick<
    Todo,
    Exclude<keyof Todo, 'id' | 'createdDate'>
>;

export type UpdateTodoProps = Partial<
    Pick<CreateTodoProps, Exclude<keyof CreateTodoProps, 'userId'>>
>;
