import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IClassroom } from "./models/classroom.interface";

@Entity({ name: "classroom" })
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
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column({
    name: "modified_at",
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedAt: Date;

  constructor(name: string, createdAt: Date, modifiedAt: Date) {
    this.name = name;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
  }
}
