"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitUserUseCase = void 0;
class SubmitUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(request) {
        const { name, email, phone, position, possession, document } = request;
        await this.usersRepository.create({
            name,
            email,
            phone,
            position,
            possession,
            document
        });
    }
}
exports.SubmitUserUseCase = SubmitUserUseCase;
