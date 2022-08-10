import { UsersRepository } from '../repositories/users-repository'


interface SubmitUserUseCaseRequest {
  name: string;
  email: string;
  phone: string;
  position: number;
  possession: boolean;
  document: string;
}

export class SubmitUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ){}

  async execute(request: SubmitUserUseCaseRequest) {
    const { name, email, phone, position, possession, document } = request;
    
    await this.usersRepository.create({
      name,
      email,
      phone,
      position,
      possession,
      document
    }) 
  }

}