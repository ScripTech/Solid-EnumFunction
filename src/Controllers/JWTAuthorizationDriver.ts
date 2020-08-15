import { IJWTAuthorization } from "../contracts/IJWTAuthorization";
import { User } from "../entities/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class JWTAuthorizationDriver implements IJWTAuthorization {
  /**
   *
   */
  async authorizationAccessWithToken(token: string): Promise<any> {
    if (token) {
      jwt.verify(
        token,
        process.env.CLIENT_SCRET as string,
        (error: any, user: any) => {
          if (error) {
            throw new Error("Authorization access failed");
          }
          return token;
        }
      );
    }
  }

  /**
   *
   */
  async generateNewToken(_user: any): Promise<string> {
    console.error(_user.username);

    const token = jwt.sign({ _user }, process.env.CLIENT_SCRET, {
      expiresIn: 1000,
    });

    return token;
  }
}
