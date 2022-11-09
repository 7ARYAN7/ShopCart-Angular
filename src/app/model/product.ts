export class Product {
  id: number;
  name: string;
  price: number;
  details: string;
  imageUrl: string | undefined;
  category : string;
  subcategory : string;
  constructor(id: number, name='', price = 0, details='',imageUrl='',category='',subcategory='') {
    this.id = id
    this.name = name
    this.details = details
    this.price = price
    this.category = category
    this.subcategory = subcategory
  }
}
