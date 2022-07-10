import { Express } from "express";
import saleRouter from "./sales.routes";

export const appRoutes = (app: Express) => {
  app.use("/sales", saleRouter);
};
