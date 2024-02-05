//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Projects")
export class ProjectsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
projectName: string;

@Column({nullable: true})
description: string;

@Column({nullable: true})
startDate: string;

@Column({nullable: true})
endDate: string;

@Column({nullable: true})
status: string;


}
