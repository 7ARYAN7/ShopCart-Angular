export class Filter {
  minPrice:string;
  maxPrice:string;
  subcategory:string;
  details:string;

  constructor(minPrice: string, maxPrice: string, subcategory: string, details: string) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.subcategory = subcategory;
    this.details = details;
  }
}
