import { json } from "stream/consumers";
import { prisma } from "../../prisma";
import { UserCreateData, UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  async create({ name, email, phone, position, possession, document }: UserCreateData) {

    await prisma.user.create({
      data: {
        name,
        email,
        phone,
        position,
        possession,
        document
      }
    })
  }
}