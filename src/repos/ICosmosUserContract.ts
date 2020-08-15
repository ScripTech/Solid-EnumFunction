import { User } from "../entities/User";

export interface ICosmosUserContract {
  /**
   * This function will list user from consmos DB connection
   *
   * @return collectoin
   */
  listUsers(): Promise<User[]>;

  /**
   * This function will be used to save user on DB
   *
   * @param User : request data
   */
  saveUser(user: User): Promise<User>;
}
