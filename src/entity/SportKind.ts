import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SportKind {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  key: string;
}
