import { buildSignInuser, signInUserUseCase } from "./signin-user";
import { buildSignOut, signOutUseCase } from "./signout";

import AuthService from "../../ports/AuthService";

export default (dependencies: {
    authService: AuthService;
}): {
    signIn: signInUserUseCase;
    signOut: signOutUseCase;
} => {
    const { authService } = dependencies;

    const signIn = buildSignInuser({authService});
    const signOut = buildSignOut({ authService });

    return { signIn, signOut };
};
