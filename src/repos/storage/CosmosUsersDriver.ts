import { ICosmosUserContract } from "../ICosmosUserContract";
import { User } from "../../entities/User";
import { AzureCosmosDataDriver } from "../../Controllers/AzureCosmosDataDriver";
import { config } from "dotenv/types";

export class CosmosUsersDriver implements ICosmosUserContract {
  private db;
  /**
   * Inicializar a class com uma connection a db
   */
  constructor(private connection: AzureCosmosDataDriver) {
    this.db = this.connection.connect({
      config: config,
    });
  }

  listUsers(): Promise<import("../../entities/User").User[]> {
    // perform query selector
    // this.db

    throw new Error("Method not implemented.");
  }
  saveUser(user: User): Promise<import("../../entities/User").User> {
    throw new Error("Method not implemented.");
  }
}
