import { Authenticate } from "./Authenticate";
import { Request, Response } from "express";

export class AuthenticateController {
  constructor(private autheticate: Authenticate) {}

  async execute(request: Request, response: Response) {
    try {
      const { username, password } = request.body;

      const authenticateToken = await this.autheticate.handle({
        username: username,
        password: password,
      });

      return response.status(200).json({
        access_token: authenticateToken,
        status: "success",
        message: "auth granted",
      });
    } catch (error) {
      throw new Error("Error:" + error.message);
    }
  }
}
