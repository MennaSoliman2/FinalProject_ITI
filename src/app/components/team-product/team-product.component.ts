import { Component } from '@angular/core';
import { product} from 'src/Models/product';
import { SharedDataService } from 'src/app/servers/shared-data.service';
import { api_product } from 'src/Models/api_product';
import { SharedDataApiService } from 'src/app/servers/shared-data-api.service';
@Component({
  selector: 'app-team-product',
  templateUrl: './team-product.component.html',
  styleUrls: ['./team-product.component.css']
})
export class TeamProductComponent {
  products:product[]=[]
  numProduct:Number=0
  ApiProduct:api_product[]=[]
constructor(private service:SharedDataService , private service2:SharedDataApiService) {
   this.products=this.service.GetTeamProduct()
   this.ApiProduct=this.service2.GetTeamApiProduct()
   console.log(this.ApiProduct);
   this.numProduct=this.products.length + this.ApiProduct.length
}

deleteProduct(p:product){
  var deletedProductIndex = this.products.findIndex(product=>product.id == p.id);
  this.products.splice(deletedProductIndex,1)
  // console.log(deletedProductIndex)
  this.numProduct= Number(this.numProduct) - 1
}
deleteApiProduct(p:api_product){
  var deletedProductIndex2 = this.ApiProduct.findIndex(product2=>product2.id == p.id);
  this.ApiProduct.splice(deletedProductIndex2,1)
  // console.log(deletedProductIndex2)
  this.numProduct= Number(this.numProduct) - 1
}
}
