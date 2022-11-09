import {Product} from "./product";

export class Cart {
  cartItemId: number;
  product: Product;
  userId: number;
  quantity:number;
  constructor(cartItemId: number, product: Product, userId: number, quantity:number) {
    this.cartItemId = cartItemId;
    this.product = product;
    this.userId=userId;
    this.quantity=quantity;
  }
}
