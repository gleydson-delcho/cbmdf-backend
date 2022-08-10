export interface UserCreateData {
  name: string;
  email: string;
  phone: string;
  position: number;
  possession: boolean;
  document: string;
}

export interface UsersRepository {
  create: (data: UserCreateData) => Promise<void>;
}