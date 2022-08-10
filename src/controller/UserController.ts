import { prisma } from "../prisma";
import { SubmitUserUseCase } from "../use-cases/sbmit-user-use-case";
import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository";

export default {
  async createUser(req, res) {
    const { name, email, phone, position, possession, document } = req.body;
    const user = await prisma.user.findUnique({ where: { email } })
    const prismaUserRepository = new PrismaUsersRepository();
    const submitUserUseCase = new SubmitUserUseCase(prismaUserRepository);
    try {
      if (user) {
        return res.status(400).send("Usuário já foi criado com este email!!")
      }
      await submitUserUseCase.execute({
        name,
        email,
        phone,
        position,
        possession,
        document
      });

      return res.status(201).send("Criado com sucesso!")
    } catch (error) {
      return error;
    }
  },
  async findAllUsers(_, res) {
    const users = await prisma.user.findMany();
    return res.status(200).send(users)
  },
  async findUser(req, res) {
    const { email } = req.params;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).send("O usuáio não existe!")
    }
    return res.status(200).send(user)
  },
  async updateUser(req, res) {
    try {
      let { email } = req.params;
      const user = await prisma.user.findUnique({ where: { email } });
      const id = user.id
      const { name, phone, position, possession, document } = req.body;
      if (!user) {
        return res.status(400).send("O usuáio não existe!")
      }
      await prisma.user.update({
        where: { id },
        data: {
          name,
          email,
          phone,
          position,
          possession,
          document
        }
      }
      )
      return res.status(200).send("Usuário alterado com sucesso!!")
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async deleteUser(req, res) {
    try {
      let { email } = req.params;
      const user = await prisma.user.findUnique({ where: { email } });
      const id = user.id
      if (!user) {
        return res.status(400).send("O usuáio não existe!")
      }
      await prisma.user.delete({where: { id }}
      )
      return res.status(200).send("Usuário deletado com sucesso!!")
    } catch (error) {
      res.status(400).send("O usuáio não existe!")
    }
  }

}