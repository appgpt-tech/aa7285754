//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("ShoppingCart")
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
cartId: string;

@Column({nullable: true})
customerId: number;

@Column({nullable: true})
productId: number;

@Column({nullable: true})
price: number;

@Column({nullable: true})
quantity: number;


}