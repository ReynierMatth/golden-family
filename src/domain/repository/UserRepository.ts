import {User} from "../model/User";

export interface UserRepository {
    login(email: string, password: string): void;
    logout(): void;
    signup(email: string, password: string): void;
    isEmailTaken(email: string): boolean;
}