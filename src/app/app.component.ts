import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceUI';  
    searchResultData:string;
    isChecked:boolean
  
  
  constructor(){    
      this.searchResultData='',
      this.isChecked=false
    

  }

  inStockGoods(data:any){
    this.isChecked=data
    console.log('appComponent'+ this.isChecked);
  }

  searchForGoods(data:any){
    this.searchResultData = data;
    console.log('appComponent'+ this.searchResultData);
  }




}

