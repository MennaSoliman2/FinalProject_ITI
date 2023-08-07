import { Injectable } from '@angular/core';
import { api_product } from './../../Models/api_product';

@Injectable({
  providedIn: 'root'
})
export class SharedDataApiService {
  private teamApiProduct:api_product[]=[]
  constructor() { }
  SetTeamApiProduct(pro:api_product[]){
    this.teamApiProduct=pro;
  }
  GetTeamApiProduct(){
    return this.teamApiProduct;
  }

}
