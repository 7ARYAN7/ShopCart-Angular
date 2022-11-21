import {Address} from "./address";

export class User {
  name: String;
  email: String;
  password : String;
  phone : number;
  address : Address;

  constructor(name: String, email: String, password: String, phone: number, address: Address) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
  }
}
