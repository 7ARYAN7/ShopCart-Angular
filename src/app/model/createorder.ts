import {User} from "./user";
import {Product} from "./product";

export class Createorder {
  orderId:number;
  user:User;
  products:Product[];
  orderStatus:string;
  quantity:number[];

  constructor(orderId: number, user: User, products: Product[], orderStatus: string, quantity: number[]) {
    this.orderId = orderId;
    this.user = user;
    this.products = products;
    this.orderStatus = orderStatus;
    this.quantity = quantity;
  }
}
