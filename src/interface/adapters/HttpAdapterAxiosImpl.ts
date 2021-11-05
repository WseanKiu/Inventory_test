import { HttpAdapter } from '../../usecases/ports/HttpAdapter';
import { AxiosResponse, AxiosStatic, AxiosError, AxiosInstance } from 'axios';

export default class HttpAdapterAxiosImpl implements HttpAdapter {
    token?: string;
    axios: AxiosInstance;

    constructor(axios: AxiosStatic, baseURL?: string) {
        if (baseURL) {
            this.axios = axios.create({
                baseURL,
            });
        } else {
            this.axios = axios;
        }
    }

    get = (url: string, options: Object): Promise<AxiosResponse> => {
        const config = this.token ? { ...options, headers: { Authorization: `Bearer ${this.token}` } } : options;
        return this.axios.get(url, config);
    };

    post = async (url: string, body: Object): Promise<AxiosResponse> => {
        try {
            const config = this.token ?
                { headers: { Authorization: `Bearer ${this.token}` } }
                : {};

            const response = await this.axios.post(url, body, config);
            return response;
        } catch (err) {
            if ((err as AxiosError).response?.data) {
                throw new Error((err as AxiosError).response?.data as string | undefined);
            }
            throw err;
        }
    };

    patch = (url: string, body: Object): Promise<AxiosResponse> => {
        const config = this.token ? { headers: { Authorization: `Bearer ${this.token}` } } : {};
        return this.axios.patch(url, body, config);
    };

    put = (url: string, body: Object): Promise<AxiosResponse> => {
        console.log({ url, body });

        const config = this.token ? { headers: { Authorization: `Bearer ${this.token}` } } : {};

        return this.axios.put(url, body, config);
    };

    delete = (url: string, options: Object): Promise<AxiosResponse> => {
        const config = this.token ? { ...options, headers: { Authorization: `Bearer ${this.token}` } } : options;

        return this.axios.delete(url, config);
    };

    setToken = (token: string): void => {
        this.token = token;
    };
}
