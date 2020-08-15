import { ValidateEnumeration } from "./Enumerations/ValidateEnumeration/ValidateEnumeration";
import { LocalDataEnumerationDriver } from "../Controllers/LocalDataEnumerationDriver";
import { ValidateEnumerationController } from "./Enumerations/ValidateEnumeration/ValidateEnumerationController";

const localDataDriver = new LocalDataEnumerationDriver();
const validateEnumController = new ValidateEnumeration(localDataDriver);

/**
 * Validate enum values
 */

const validateEnumValues = new ValidateEnumerationController(
  validateEnumController
);

export { validateEnumValues };
