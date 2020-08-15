import { IJWTAuthorization } from "../../contracts/IJWTAuthorization";

export class Authenticate {
  constructor(private jwtAuthorization: IJWTAuthorization) {}

  async handle(_request: any) {
    const getAuthorizationToken = await this.jwtAuthorization.generateNewToken(
      _request
    );

    return getAuthorizationToken;
  }
}
