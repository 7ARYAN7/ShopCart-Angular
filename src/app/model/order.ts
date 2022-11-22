import {User} from "./user";
import {Product} from "./product";

export class Order {
  orderId:number;
  user:User;
  products:Product[];
  quantity:number[];
  orderStatus:string;


  constructor(orderId: number, user: User, products: Product[], quantity: number[], orderStatus: string) {
    this.orderId = orderId;
    this.user = user;
    this.products = products;
    this.quantity = quantity;
    this.orderStatus = orderStatus;
  }
}
