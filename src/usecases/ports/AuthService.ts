export default interface AuthService {
    signIn(
        username: string,
        password: string,
        isAdmin: boolean,
    ): Promise<{ user: object | null }>;
    signOut(): Promise<void>;
}