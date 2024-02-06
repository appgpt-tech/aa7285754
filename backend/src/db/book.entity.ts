//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("book")
export class bookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
title: number;

@Column({nullable: true})
isbn: number;

@Column({nullable: true})
author: number;


}
