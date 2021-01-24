import { Injectable } from '@angular/core';
import { PriceList } from '../model/price-list';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {

  dataSource: PriceList[] = [];
  totalAmount;
  constructor() { }

  getItems(){
    return this.dataSource;
  }

  addToList(item){
    return this.dataSource.unshift(item);
  }

  
  handleRemove(e){
    let y = this.dataSource.filter((item:any) => item.id != e);
    this.dataSource = y
    return this.dataSource;
  }


  handleTotalAmount(){
    this.totalAmount = 0;
    let x = 0
    // if(this.dataSource.length){
      this.dataSource.forEach((item:any)=>{
        x += item.price;
        this.totalAmount = x.toFixed(2);
      })
    // }
    return this.totalAmount;
  }
}
