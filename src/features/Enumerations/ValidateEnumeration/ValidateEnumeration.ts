import { IEnumerationContract } from "../../contracts/Enumeration/IEnumerationContract";
import { EnumValidatoin } from "../../entities/EnumValidatoin";
import { ValidationDataTypes } from "./ValidateEnumerationType";

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
