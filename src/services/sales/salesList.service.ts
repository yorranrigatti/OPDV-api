import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales";

export default class SalesListService {
  async execute(): Promise<any> {
    const saleRepository = AppDataSource.getRepository(Sale);

    const sales = await saleRepository.find();

    return sales;
  }
}
