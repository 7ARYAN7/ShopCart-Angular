export class Address {
  pin: number;
  country: string;
  state: string;
  city: string;

  constructor(pin: number, city: string, state: string, country: string) {
    this.pin = pin;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
