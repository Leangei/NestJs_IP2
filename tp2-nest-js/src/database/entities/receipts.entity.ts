import { Entity } from "typeorm";

@Entity()
export class Receipt {
  receiptId: string;
  issuedAt: Date;
  name: string;
  price: number;
}