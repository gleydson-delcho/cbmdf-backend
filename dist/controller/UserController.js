"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
const sbmit_user_use_case_1 = require("../use-cases/sbmit-user-use-case");
const prisma_users_repository_1 = require("../repositories/prisma/prisma-users-repository");
exports.default = {
    async createUser(req, res) {
        const { name, email, phone, position, possession, document } = req.body;
        const user = await prisma_1.prisma.user.findUnique({ where: { email } });
        const prismaUserRepository = new prisma_users_repository_1.PrismaUsersRepository();
        const submitUserUseCase = new sbmit_user_use_case_1.SubmitUserUseCase(prismaUserRepository);
        try {
            if (user) {
                return res.status(400).send("Usuário já foi criado com este email!!");
            }
            await submitUserUseCase.execute({
                name,
                email,
                phone,
                position,
                possession,
                document
            });
            return res.status(201).send("Criado com sucesso!");
        }
        catch (error) {
            return error;
        }
    },
    async findAllUsers(_, res) {
        const users = await prisma_1.prisma.user.findMany();
        return res.status(200).send(users);
    },
    async findUser(req, res) {
        const { email } = req.params;
        const user = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).send("O usuáio não existe!");
        }
        return res.status(200).send(user);
    },
    async updateUser(req, res) {
        try {
            let { email } = req.params;
            const user = await prisma_1.prisma.user.findUnique({ where: { email } });
            const id = user.id;
            const { name, phone, position, possession, document } = req.body;
            if (!user) {
                return res.status(400).send("O usuáio não existe!");
            }
            await prisma_1.prisma.user.update({
                where: { id },
                data: {
                    name,
                    email,
                    phone,
                    position,
                    possession,
                    document
                }
            });
            return res.status(200).send("Usuário alterado com sucesso!!");
        }
        catch (error) {
            res.status(400).send(error);
        }
    },
    async deleteUser(req, res) {
        try {
            let { email } = req.params;
            const user = await prisma_1.prisma.user.findUnique({ where: { email } });
            const id = user.id;
            if (!user) {
                return res.status(400).send("O usuáio não existe!");
            }
            await prisma_1.prisma.user.delete({ where: { id } });
            return res.status(200).send("Usuário deletado com sucesso!!");
        }
        catch (error) {
            res.status(400).send("O usuáio não existe!");
        }
    }
};
