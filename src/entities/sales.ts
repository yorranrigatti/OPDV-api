import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
// import Product from "./products";

@Entity("sales")
class Sale {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  products: string;

  @CreateDateColumn()
  created_at: Date;

  // @OneToMany((type) => Product, (product) => product.sale, {
  //   eager: true,
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
  // })
  // @JoinColumn()
  // products: string[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Sale;
