//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("websites")
export class websitesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
siteName: string;

@Column("text",{nullable: true})
url: string;

@Column("integer",{nullable: true})
rating: number;


}