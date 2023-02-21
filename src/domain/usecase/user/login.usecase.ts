import {UserRepository} from "../../repository/UserRepository";

export class LoginUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    handle(email:string, password:string): void {
        return this.userRepository.login(email, password)
    }
}
