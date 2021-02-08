import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PriceList } from "src/app/shared/model/price-list";
import { PriceListService } from 'src/app/shared/service/price-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['item', 'price', 'action'];
  dataSource;
  totalAmount;
  @ViewChild('item') item:ElementRef;
  @ViewChild('price') price:ElementRef;

  dollar = false;

  constructor(private priceListSvc: PriceListService) { }

  ngOnInit(): void {
    this.priceListSvc.getItems();
    this.totalAmount = this.priceListSvc.handleTotalAmount();
    console.log( this.totalAmount);
    this.dataSource = this.priceListSvc.getItems();
  }

  handleDollar(){
    this.dollar = !this.dollar;
  }

  handleRemove(e){
    this.priceListSvc.handleRemove(e);
    this.dataSource = this.priceListSvc.getItems();
    this.totalAmount = this.priceListSvc.handleTotalAmount();
  }
  
  handleAddToList(){ 
    const item = this.item.nativeElement.value
    const price = this.price.nativeElement.value
    let obj:PriceList = {
      id: new Date().getTime().toString(),
      item: item,
      price: parseInt(price)
    }    
    if(this.item.nativeElement.value != "" && this.price.nativeElement.value != ""){
      this.priceListSvc.addToList(obj);       
    this.item.nativeElement.value = ""
    this.price.nativeElement.value = ""
    }
    this.totalAmount = this.priceListSvc.handleTotalAmount();   
  }

}
