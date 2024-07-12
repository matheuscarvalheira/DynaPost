import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IClassroom } from "./models/classroom.interface";

@Entity({ name: "Classroom" })
export class Classroom implements IClassroom {
  @PrimaryGeneratedColumn("increment", {
    name: "id",
  })
  id?: string | undefined;

  @Column({
    name: "name",
    type: "varchar",
  })
  name: string;

  @Column({
    name: "created_at",
    type: "timestamp",
  })
  created_at: Date;

  @Column({
    name: "modified_at",
    type: "timestamp",
  })
  modified_at: Date;

  constructor(name: string, created_at: Date, modified_at: Date) {
    this.name = name;
    this.created_at = created_at;
    this.modified_at = modified_at;
  }
}
