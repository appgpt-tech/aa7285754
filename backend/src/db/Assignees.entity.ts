//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Assignees")
export class AssigneesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
assigneeName: string;

@Column({nullable: true})
role: string;

@Column({nullable: true})
email: string;


}
