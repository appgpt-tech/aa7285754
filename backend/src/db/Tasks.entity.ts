//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Tasks")
export class TasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
taskName: string;


}
