import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IStudent } from "./models/student.interface";

@Entity('students')
export class Student implements IStudent{
    @PrimaryGeneratedColumn('uuid', {
        name: 'id'
    })
    id?: string | undefined;

    @Column({
        name: 'name',
        type: 'varchar',
    })
    name: string;

    @Column({
        name: 'active',
        type: 'boolean',
    })
    active: boolean;

    @Column({
        name: 'created_at',
        type: 'timestamp without time zone',
        default: ()=> 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column({
        name: 'modified_at',
        type: 'timestamp without time zone',
        default: ()=> 'CURRENT_TIMESTAMP',
    })
    modifiedAt: Date;

}
