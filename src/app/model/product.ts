export class Product {
  productId: number;
  name: string;
  price: number;
  details: string;
  imageUrl: string | undefined;
  category : string;
  subcategory : string;
  constructor(productId: number, name='', price = 0, details='',imageUrl='',category='',subcategory='') {
    this.productId = productId
    this.name = name
    this.details = details
    this.price = price
    this.category = category
    this.subcategory = subcategory
  }
}
