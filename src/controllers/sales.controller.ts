import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import SalesCreateService from "../services/sales/salesCreate.service";
import SalesDeleteService from "../services/sales/salesDelete.service";
import SalesListService from "../services/sales/salesList.service";
import SalesUpdateService from "../services/sales/salesUpdate.service";

export default class SalesController {
  static async store(req: Request, res: Response) {
    const { name, status, products } = req.body;

    const createTask = new SalesCreateService();

    const task = await createTask.execute({
      name,
      status,
      products,
    });

    return res.status(201).json({
      message: "Sale created successfully",
      data: instanceToPlain(task),
    });
  }

  static async index(req: Request, res: Response) {
    const tasksList = new SalesListService();

    const tasks = await tasksList.execute();

    return res.json(instanceToPlain(tasks));
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    const updateSale = new SalesUpdateService();

    const sale = await updateSale.execute(id, status);

    return res.json({
      message: "Sale updated successfully",
      data: instanceToPlain(sale),
    });
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteTask = new SalesDeleteService();

    await deleteTask.execute(id);

    return res.status(204).json({ message: "Sale deleted successfully" });
  }
}
