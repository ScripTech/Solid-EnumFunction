import { ValidateEnumeration } from "./ValidateEnumeration";
import { Enumeration } from "../../entities/Enumeration";

export class ValidateEnumerationController {
  constructor(private validationEnumeration: ValidateEnumeration) {}

  async execute(enumeration: Enumeration) {
    try {
      await this.validationEnumeration.handle({
        enumCode: enumeration.enumCode,
        language: enumeration.language,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
