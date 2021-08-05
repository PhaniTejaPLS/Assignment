import { Injectable } from '@angular/core';
import { GOODS } from 'src/data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  getData():Array<any>{
    return GOODS;
  }
}
