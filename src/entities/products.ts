// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { v4 as uuid } from "uuid";
// import Sale from "./sales";

// @Entity("products")
// class Product {
//   @PrimaryGeneratedColumn("uuid")
//   readonly id: string;

//   @Column()
//   name: string;

//   @CreateDateColumn()
//   created_at: Date;

//   @ManyToOne((type) => Sale, (sale) => sale.products)
//   @JoinColumn()
//   sale: Sale;

//   constructor() {
//     if (!this.id) {
//       this.id = uuid();
//     }
//   }
// }

// export default Product;
