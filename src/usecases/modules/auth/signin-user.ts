import AuthService from "../../ports/AuthService";

export type signInUserUseCase = (
    email: string,
    password: string,
) => Promise<{ user: object | null }>;

export const buildSignInuser = (dependencies: {
    authService: AuthService;
}): signInUserUseCase => {
    const { authService } = dependencies;

    const signInUser: signInUserUseCase = (email, password) =>
        authService.signIn(email, password, false);

    return signInUser;
};
