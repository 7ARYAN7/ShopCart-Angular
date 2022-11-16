import { Component, OnInit } from '@angular/core';
import {LabelType, Options} from 'ng5-slider';
import {ProductListComponent} from "../product-list/product-list.component";
import {Filter} from "../../../model/filter";
@Component({
  selector: 'app-filters',
  providers:[ProductListComponent],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  model: any = {}
  constructor(private prod:ProductListComponent) { }

  ngOnInit(): void {
  }
  minValue: number = 50000;
  maxValue: number = 150000;
  options: Options = {
    floor: 0,
    ceil: 300000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min Price:</b> ₹' + value;
        case LabelType.High:
          return '<b>Max Price:</b> ₹' + value;
        default:
          return '₹' + value;
      }
    }
  };

  // filterby(){
  //   console.log(this.model.categoryL)
  //   let filter = new Filter(this.minValue.toString(),this.maxValue.toString(),this.model.subcategory,this.model.brand)
  //    this.prod.loadFilteredProducts(filter,this.model.categoryL);
  // }
}
