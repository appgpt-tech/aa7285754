//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("tracks")
export class tracksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
trackName: string;

@Column({nullable: true})
album: number;

@Column({nullable: true})
lyrics: string;


}
