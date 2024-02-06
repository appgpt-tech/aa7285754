//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Wishlist")
export class WishlistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
userId: string;

@Column({nullable: true})
cardId: string;

@Column({nullable: true})
insertedDate: Date;


}
