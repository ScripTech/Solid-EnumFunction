import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

/**
 * This funciton is only responsible for user authorization
 *
 * @param AuthToken string
 * @return auth state
 */
export const authorizationToken = (
  request: Request,
  response: Response,
  next
) => {
  const { client_secret, auth_token }: any = request.headers;

  const token = auth_token && auth_token.split(" ")[1];
  if (!token) return response.status(401);
  if (client_secret && client_secret === process.env.CLIENT_SECRET)
    jwt.verify(
      token,
      process.env.AUTH_TOKEN as string,
      (error: any, user: any) => {
        if (error) {
          return response.status(403);
        }

        request.body = user;
        next();
      }
    );
};

export const generateToken = (request: Request, response: Response, next) => {
  const auth_token = crypto.randomBytes(64).toString("hex");
};
