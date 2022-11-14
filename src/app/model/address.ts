export class Address {
  street: string;
  city: string;
  state: string;
  pinCode: number;

  constructor(street: string, city: string, state: string, pinCode: number) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.pinCode = pinCode;
  }
}
