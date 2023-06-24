import { Iuser } from '../types/user.dto';

class Users {
  #users: Iuser[];

  constructor() {
    this.#users = [];
  }

  create(user: Pick<Iuser, 'email' | 'password'>): void {
    this.#users.push(user);
  }

  findOneByEmail(email: string): Iuser | undefined {
    for (let i = 0; i < this.#users.length; i++)
      if (this.#users[i].email === email) return this.#users[i];
    return undefined;
  }
}

export const users = new Users();
