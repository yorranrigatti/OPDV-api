import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import SalesController from "../controllers/sales.controller";
import salesCreateSchema from "../validations/sales/salesCreate.validation";
import salesUpdateSchema from "../validations/sales/salesUpdate.validation";

const saleRouter = Router();

saleRouter.post(
  "/",
  expressYupMiddleware({ schemaValidator: salesCreateSchema }),
  SalesController.store
);
saleRouter.get("/", SalesController.index);
saleRouter.patch(
  "/:id",
  expressYupMiddleware({ schemaValidator: salesUpdateSchema }),
  SalesController.update
);
saleRouter.delete("/:id", SalesController.delete);

export default saleRouter;
