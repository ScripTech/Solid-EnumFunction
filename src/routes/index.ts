import { Router } from "express";

const routes = Router();

/**
 * Home path for api based functions request handle
 *
 */
routes.get("/api/v01/", (request, response) => {
  return response.json({
    status: "success",
    message: "Reuqest successfully handled",
    result: [],
  });
});

export { routes };
