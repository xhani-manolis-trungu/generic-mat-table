import { Column } from "../decorators/column";
import { autoserializeAs } from "cerializr";

export class People {
  // ID
  @autoserializeAs(Number)
  id: number;

  // NAME
  @autoserializeAs(String)
  @Column()
  name: string;

  // AGE
  @autoserializeAs(String)
  @Column({
    canSort: true
  })
  age: string;

  // LASTNAME
  @autoserializeAs(String)
  @Column({
    canSort: true
  })
  lastname: number;
}
