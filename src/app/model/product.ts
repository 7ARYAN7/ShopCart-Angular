export interface Product {
  productId: number;
  name: string;
  price: number;
  details: string;
  category : string;
  subcategory : string[];
  // constructor(productId, name, price = 0, details,category,subcategory) {
  //   this.productId = productId
  //   this.name = name
  //   this.details = details
  //   this.price = price
  //   this.category = category
  //   this.subcategory = subcategory
  // }
}
