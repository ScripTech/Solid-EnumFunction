import { User } from "../entities/User";

export interface IJWTAuthorization {
  /**
   * Performe token validation to auth client access
   *
   * @param Request - Express.Request
   * @return auth response
   */
  authorizationAccessWithToken(token: string): Promise<any>;

  /**
   * This funcition will generate new token
   *
   * @param user - User
   * @return token - Promise<string>
   */
  generateNewToken(_user: any): Promise<string>;
}
