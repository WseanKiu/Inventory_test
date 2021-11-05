import AuthService from "../../ports/AuthService";

export type signOutUseCase = () => Promise<void>;

export const buildSignOut = (dependencies: {
    authService: AuthService;
}): signOutUseCase => {
    const { authService } = dependencies;

    const signOut: signOutUseCase = () => authService.signOut();

    return signOut;
}
