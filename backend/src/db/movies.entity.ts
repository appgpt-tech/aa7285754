//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export class moviesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
movieTitle: string;

@Column("text",{nullable: true})
genre: string;

@Column("bool",{nullable: true})
watchedStatus: boolean;


}
