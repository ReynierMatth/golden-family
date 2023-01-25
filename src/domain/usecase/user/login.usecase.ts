import {UserRepository} from "../../repository/UserRepository";

export class LoginUseCase {
    constructor(private readonly userSessionRepository: UserRepository) {}

    handle(email:string, password:string): void {
        return this.userSessionRepository.login(email, password)
    }
}
