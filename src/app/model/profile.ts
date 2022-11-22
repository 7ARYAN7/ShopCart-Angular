import {Address} from "./address";

export class Profile {
  id : number;
  name: String;
  email: String;
  phone : number;
  address : Address;

  constructor(id: number, name: String, email: String, phone: number, address: Address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
}
