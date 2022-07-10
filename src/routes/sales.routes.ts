import { Router } from "express";
import SalesController from "../controllers/sales.controller";

const saleRouter = Router();

saleRouter.post("/", SalesController.store);
saleRouter.get("/", SalesController.index);
saleRouter.delete("/:id", SalesController.delete);

export default saleRouter