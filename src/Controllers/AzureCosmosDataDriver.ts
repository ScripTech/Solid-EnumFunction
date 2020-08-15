import {
  IDataDriversContract,
  Config,
} from "../contracts/IDataDriversContract";

export class AzureCosmosDataDriver implements IDataDriversContract {
  connect(config: Config<any>): void {
    throw new Error("Method not implemented.");
  }
}
