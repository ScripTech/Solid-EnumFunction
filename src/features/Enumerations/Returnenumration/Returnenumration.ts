import { IEnumerationContract } from "../../../contracts/Enumeration/IEnumerationContract";
import { Enumeration } from "../../../entities/Enumeration";
import { EnumerationRequest } from "./ReturnenumrationType";

export class ReturnEnumeration {
  constructor(private enumerationContract: IEnumerationContract) {}

  /**
   * Here we execute the request data for futher processing
   *
   * @param requesteBody Enumeration "../../../entities/Enumeration"
   */
  async handle(requesteBody: EnumerationRequest) {
    const enumerationRequest = new Enumeration(requesteBody);

    /**
     * GetData and validate request
     */
    const requestedEnumeration = await this.enumerationContract.returnEnumeration(
      enumerationRequest
    );

    /**
     * Here we return enumeration event response
     */
    return requestedEnumeration;
  }
}
