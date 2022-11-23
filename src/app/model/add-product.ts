export class AddProduct {
  name: string;
  price: number;
  details: string;
  imageUrl: string | undefined;
  category : string;

  constructor(name: string, price: number, details: string, imageUrl: string | undefined, category: string) {
    this.name = name;
    this.price = price;
    this.details = details;
    this.imageUrl = imageUrl;
    this.category = category;
  }
}
