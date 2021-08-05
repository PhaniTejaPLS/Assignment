import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {  
    searchGoods: string;
    isChecked: boolean;
  
  @Output() goodsInStock:EventEmitter<any> = new EventEmitter;
  @Output() searchResult:EventEmitter<any> = new EventEmitter;
  constructor() {    
      this.searchGoods='',
      this.isChecked=false
    
        
   }

  ngOnInit(): void {    
  }

  areGoodsInStock(){
    this.goodsInStock.emit(this.isChecked);
    console.log(this.isChecked);    
  }

  searchForGoods(){
    this.searchResult.emit(this.searchGoods);
    console.log(this.searchGoods)
  }




}
