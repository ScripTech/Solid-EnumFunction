import { Router } from "express";
import crypto from "crypto";
const routes = Router();

import dotenv from "dotenv";

dotenv.config();

import { authorization, loginUserAction } from "../features/";

/**
 * Home path for api based functions request handle
 *
 */
routes.get("/api/v01/", (request, response) => {
  return authorization.execute(request, response);
  return response.json({
    status: "success",
    message: "Reuqest successfully handled",
    result: [],
  });
});

routes.post("/api/v01/login", (request, response) => {
  return loginUserAction.execute(request, response);
});

export { routes };
