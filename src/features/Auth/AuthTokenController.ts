import { Request, Response } from "express";
import { AuthToken } from "./AuthToken";

export class AuthTokenController {
  constructor(private authentication: AuthToken) {}

  async execute(request: Request, response: Response) {
    try {
      const { authorization_token }: any = request.headers;
      const token = await this.authentication.handle(
        authorization_token.split(" ")[1]
      );

      return response.status(200).json({
        access_token: token,
        status: "success",
        message: "auth granted",
      });
    } catch (error) {
      return response.status(403).json({
        access_token: null,
        status: "error",
        mensagem: error.message,
      });
    }
  }
}
