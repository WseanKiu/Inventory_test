import axios from "axios";
import HttpAdapterAxiosImpl from "../interface/adapters/HttpAdapterAxiosImpl";

import AuthServiceRestImpl from "../interface/services/AuthServiceRestImpl";
import TodoRepositoryImpl from "../interface/repositories/TodoRepositoryImpl";

import authUseCases from "../usecases/modules/auth";
import todoUseCases from "../usecases/modules/todo";

import urls from "../constants/urls";

const { todo: todoUrls, auth: authUrls } = urls;

const httpAdapter = new HttpAdapterAxiosImpl(axios);

const authService = new AuthServiceRestImpl(httpAdapter, authUrls);

const todoRepo = new TodoRepositoryImpl(httpAdapter, todoUrls);

const authInteractor = authUseCases({ authService });
const todoInteractor = todoUseCases({ todoRepo });

export const dependencies = {
    httpAdapter,
    authInteractor,
    todoInteractor,
};

export type Dependencies = typeof dependencies;
