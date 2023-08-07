import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataApiService } from 'src/app/servers/shared-data-api.service';
import { api_product } from './../../../Models/api_product';


@Component({
  selector: 'app-products',
  templateUrl:'./products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  apiProduct:any;
  constructor(private HttpRequest:HttpClient,private service:SharedDataApiService){
    HttpRequest.get("https://fakestoreapi.com/products").subscribe((res)=>{
      this.apiProduct=res
      // console.log(res)
    })
  }

AddTeamProduct:api_product[]=[]

DeleteProduct(p:api_product){
  var DeletedProduct = this.AddTeamProduct.findIndex(products=>products.id==p.id);
  this.AddTeamProduct.splice(DeletedProduct,1)
}
AddTeam(P:api_product){
  this.AddTeamProduct.push(P)
  this.service.SetTeamApiProduct(this.AddTeamProduct);
  console.log(this.AddTeamProduct);
}


}
