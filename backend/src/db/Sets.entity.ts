//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Sets")
export class SetsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
setId: string;

@Column({nullable: true})
setname: string;

@Column({nullable: true})
releasedate: string;

@Column({nullable: true})
totalcards: string;


}
