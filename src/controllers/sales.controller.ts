import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import SalesCreateService from "../services/sales/salesCreate.service";
import SalesDeleteService from "../services/sales/salesDelete.service";
import SalesListService from "../services/sales/salesList.service";

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
    // const per_page = req.query.per_page as string;
    // const page = req.query.page as string;

    const tasksList = new SalesListService();

    const tasks = await tasksList.execute();

    return res.json(instanceToPlain(tasks));
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteTask = new SalesDeleteService();

    await deleteTask.execute(id);

    return res.status(204).json({ message: "Sale deleted successfully" });
  }
}
