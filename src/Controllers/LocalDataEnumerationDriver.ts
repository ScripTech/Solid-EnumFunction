import { IEnumerationContract } from "../contracts/Enumeration/IEnumerationContract";
import { Enumeration } from "../entities/Enumeration";
import { EnumValidatoin } from "../entities/EnumValidatoin";
import data from "../data/data.json";
import { ValidateEnumerationController as validateEnum } from "../features/Enumerations/ValidateEnumeration/ValidateEnumerationController";

export class LocalDataEnumerationDriver implements IEnumerationContract {
  private dataSet = data;

  async returnEnumeration(enumPair: Enumeration): Promise<Enumeration> {
    throw new Error("Method not implemented.");
  }

  /**
   * Validate Enumeration value
   */
  isEnumerationValueValid(enumPair: EnumValidatoin): boolean {
    let lang = enumPair.language;
    if (!this.dataSet.data.includes({ lang })) return false;

    if (
      this.dataSet.data.map(
        (data) =>
          data[`${enumPair}`] === enumPair.enumCode &&
          data[`${enumPair}`].enumCode
      )
    )
      return false;
  }
}
