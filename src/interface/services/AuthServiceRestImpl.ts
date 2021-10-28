import AuthService from "../../usecases/ports/AuthService";
import { HttpAdapter } from "../../usecases/ports/HttpAdapter";

export default class AuthServiceRestImpl implements AuthService {
    httpAdapter: HttpAdapter;
    urls: { [key: string]: string };

    constructor(httpAdapter: HttpAdapter, urls: { [key: string]: string }) {
        this.httpAdapter = httpAdapter;
        this.urls = urls;
    }

    signIn(
        employeeNo: string,
        password: string,
    ): Promise<{
        user: object | null;
    }> {
        console.log('in AuthServiceRestImpl', employeeNo);
        console.log('in AuthServiceRestImpl', password);

        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    user: {
                        id: 'user-id-a1dslakf',
                        token: 'salfj1oi23987ryhisjda8798dfiasgdfkhsadf',
                    },
                });
            }, 3000);
        });
    }

    signOut(): Promise<void> {
        console.log('in Auth Service logging out.');
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }
}