import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales";
import { AppError } from "../../errors/appError";

export default class SalesUpdateService {
  async execute(id: string, status: string): Promise<any> {
      const saleRepository = AppDataSource.getRepository(Sale);
      
    if (
      !id.match(
        /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      )
    ) {
      throw new AppError("The id informed is not valid");
    }

    const sale = await saleRepository.findOne({ where: { id } });

    if (!sale) {
      throw new AppError("User not found", 404);
    }

    status ? (sale.status = status) : sale.status;

    await saleRepository.save(sale);

    return sale;
  }
}
