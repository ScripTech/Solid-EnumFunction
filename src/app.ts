import express from "express";

import { routes } from "./routes";

const app = express();

/**
 * set Server to use Json parser
 */
app.use(express.json());

/**
 * Set Server to routes
 */
app.use(routes);

export { app };
