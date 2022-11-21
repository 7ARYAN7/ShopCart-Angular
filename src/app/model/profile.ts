import {Address} from "./address";

export class Profile {
  userId : number;
  name: String;
  email: String;
  phone : number;
  address : Address;

  constructor(name: String, email: String, phone: number, userId: number, address: Address) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
}
