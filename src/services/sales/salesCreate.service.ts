import { AppDataSource } from "../../data-source";
// import Product from "../../entities/products";
import Sale from "../../entities/sales";
import { ISaleCreate } from "../../interfaces/sales";

export default class SalesCreateService {
  async execute({ name, status, products }: ISaleCreate): Promise<any> {
    const saleRepository = AppDataSource.getRepository(Sale);
    // const productRepository = AppDataSource.getRepository(Product);

    // const splitedProducts = products.split(",");
    // console.log(splitedProducts);

    // let sale = saleRepository.create({
    //   name,
    //   status,
    //   products: splitedProducts,
    // });

    let sale = saleRepository.create({
      name,
      status,
      products,
    });

    return await saleRepository.save(sale);

    // splitedProducts.forEach(async (prod) => {
    //   let product = productRepository.create({
    //     name: prod,
    //     sale,
    //   });
    //   await productRepository.save(product);
    // });
  }
}
