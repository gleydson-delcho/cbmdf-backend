"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUsersRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaUsersRepository {
    async create({ name, email, phone, position, possession, document }) {
        await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                phone,
                position,
                possession,
                document
            }
        });
    }
}
exports.PrismaUsersRepository = PrismaUsersRepository;
