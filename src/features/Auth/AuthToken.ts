import { IJWTAuthorization } from "../../contracts/IJWTAuthorization";

export class AuthToken {
  constructor(private jwtAuthorization: IJWTAuthorization) {}

  /**
   * Handle User authentication request
   */
  async handle(authorization_token: string) {
    const token = await this.jwtAuthorization.authorizationAccessWithToken(
      authorization_token
    );

    return token;
  }
}
