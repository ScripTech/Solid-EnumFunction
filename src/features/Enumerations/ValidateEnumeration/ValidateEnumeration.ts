import { IEnumerationContract } from "../../../contracts/Enumeration/IEnumerationContract";

import { ValidationDataTypes } from "./ValidateEnumerationType";
import { EnumValidatoin } from "../../../entities/EnumValidatoin";

export class ValidateEnumeration {
  constructor(private enumerationContract: IEnumerationContract) {}

  /**
   * Handle request data
   */
  async handle(requestData: ValidationDataTypes) {
    /**
     * Create Validation request object
     */
    const validationEnumeration = new EnumValidatoin(requestData);

    const validationResponse = await this.enumerationContract.isEnumerationValueValid(
      validationEnumeration
    );

    /**
     * Return boolean
     */
    return validationResponse;
  }
}
