import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, OnChanges {
  receivedArray: Array<any>;
  filteredArray: Array<any>;

  @Input() searchResult:string;
  @Input() isChecked:boolean
  
  private readonly getDataService: GetDataService;
  constructor(getDataService:GetDataService) { 
    this.receivedArray = [];
    this.getDataService = getDataService;
    this.searchResult = ''
    this.isChecked=false
    
    this.filteredArray = [];
  }

  ngOnInit(): void {
    this.receivedArray = this.getDataService.getData();
    this.filteredArray = this.receivedArray;
  }
  
  ngOnChanges(){      //called when either of the inputs from user changes
    this.filterDataBasedOnStock();
    this.filterDataBasedOnSearch();
  }
  
  filterDataBasedOnStock(){       //filter the data when checkBox is clicked
    if(this.isChecked){
      this.filteredArray = this.filteredArray.filter(goods =>goods.stocked == true);
      console.log(this.filteredArray+'isavailable tru');
    }else{
      this.filteredArray = this.receivedArray;
      console.log(this.filteredArray+'isavailable false');
    }
  }

  filterDataBasedOnSearch(){  //filter the data when search string is given
    this.filteredArray = this.filteredArray.filter(goods =>goods.category.includes(this.searchResult)|| goods.name.includes(this.searchResult)
    || goods.price.includes(this.searchResult));
  }
  
  }
  