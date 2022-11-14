import {Address} from "./address";

export class User {
  name: String;
  email: String;
  password : String;
  phoneNumber : number;
  address : Address;

  constructor(name: String, email: String, password: String, phoneNumber: number, address: Address) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
