import TodoRepository from "../../usecases/ports/TodoRepository";
import { HttpAdapter } from '../../usecases/ports/HttpAdapter';
import { Todo } from "../../domain/entities/todo";

export default class TodoRepositoryImpl implements TodoRepository {
    httpAdapter: HttpAdapter;
    urls: { [key: string]: string };

    constructor(httpAdapter: HttpAdapter, urls: { [key: string]: string }) {
        this.httpAdapter = httpAdapter;
        this.urls = urls;
    }

    find = async (params: {
        userId: string;
        page?: number;
        limit?: number;
    }): Promise<Todo[]> => {
        const response = await this.httpAdapter.get(this.urls.getTodos, {
            params,
        });
        const todos = response.data.data;

        return todos;
    };

    // Todo: find by ID
    findById = async (): Promise<Todo | undefined> => undefined;

    // Todo: create
    insert = async (): Promise<Todo> => ({
        id: '2e28f99d-e088-4858-aeff-d80be4c966dc',
        userId: '53609303-1729-4181-961b-bc775c2121a3',
        title: 'sample',
        description: 'do something',
        done: false,
        createdAt: new Date(),
    });

    // Todo: update
    update = async (): Promise<void> => {};
}