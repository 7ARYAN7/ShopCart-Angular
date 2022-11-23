export class UpdateProduct {
  productId: number | undefined;
  name: string;
  price: number;
  details: string;
  imageUrl: string | undefined;
  category : string;

  constructor(productId: number | undefined, name: string, price: number, details: string, imageUrl: string | undefined, category: string) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.details = details;
    this.imageUrl = imageUrl;
    this.category = category;
  }
}

