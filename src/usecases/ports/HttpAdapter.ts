export interface HttpAdapter {
    get(url: string, config: Object): Promise<any>;
    post(url: string, body: Object): Promise<any>;
    patch(url: string, body: Object): Promise<any>;
    put(url: string, body: Object): Promise<any>;
    delete(url: string, body: Object): Promise<any>;
    setToken(token: string): void;
}