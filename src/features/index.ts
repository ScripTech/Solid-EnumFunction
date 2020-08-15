import { ValidateEnumeration } from "./Enumerations/ValidateEnumeration/ValidateEnumeration";
import { LocalDataEnumerationDriver } from "../Controllers/LocalDataEnumerationDriver";
import { ValidateEnumerationController } from "./Enumerations/ValidateEnumeration/ValidateEnumerationController";
import { JWTAuthorizationDriver } from "../Controllers/JWTAuthorizationDriver";
import { AuthToken } from "./Auth/AuthToken";
import { AuthTokenController } from "./Auth/AuthTokenController";
import { AuthenticateController } from "./Auth/AuthenticateController";
import { Authenticate } from "./Auth/Authenticate";

const localDataDriver = new LocalDataEnumerationDriver();
const validateEnumController = new ValidateEnumeration(localDataDriver);

const authorizationDriver = new JWTAuthorizationDriver();
const authToken = new AuthToken(authorizationDriver);
const loginUserAuth = new Authenticate(authorizationDriver);
/**
 * Validate enum values
 */

const validateEnumValues = new ValidateEnumerationController(
  validateEnumController
);

const authorization = new AuthTokenController(authToken);
const loginUserAction = new AuthenticateController(loginUserAuth);

export { validateEnumValues, authorization, loginUserAction };
