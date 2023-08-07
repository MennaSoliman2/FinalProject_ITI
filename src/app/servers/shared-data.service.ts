import { Injectable } from '@angular/core';
import { product } from 'src/Models/product';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private teamProducts:product[]=[];

  constructor() { 
  }


  SetTeamProduct(pro:product[]){
    this.teamProducts = pro
  }
  GetTeamProduct(){
    return this.teamProducts;
  }
}
