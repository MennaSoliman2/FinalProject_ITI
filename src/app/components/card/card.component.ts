import { Component } from '@angular/core';
import { product } from './../../../Models/product';
import { concat } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedDataService } from 'src/app/servers/shared-data.service';
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  searchname:string="";
  searchmodel:string="";
  addToArray:product[]=[]


  products:product[]=[
    {id:1,imageSrc:"./assets/image/6.webp",name:"Air Jordan 1 Low",model:"Men's Shoe",describtion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ducimus iusto.",price:177,quantity :10}
   , {id:2,imageSrc:"./assets/image/8.webp",name:"Air Jordan 1 Mid",model:"Men's Shoes",describtion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ducimus iusto.",price:125,quantity :5}
   ,{id:3,imageSrc:"./assets/image/4.webp",name:"Air Jordan 2 Low",model:"Women's Shoes",describtion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ducimus iusto.",price:150.99,quantity :0}
    , {id:4,imageSrc:"./assets/image/7.webp",name:"Air Jordan 1 Low",model:"Men's Shoe",describtion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ducimus iusto.",price:117,quantity :11}
    , {id:5,imageSrc:"./assets/image/9.webp",name:"Air Jordan 3 Mid",model:"Women's Shoes",describtion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ducimus iusto.",price:105,quantity :12}
    ,{id:6,imageSrc:"./assets/image/10.webp",name:"Nike Air Force 1 '07",model:"Men's Shoe",describtion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ducimus iusto.",price:110,quantity :0}]

  filterProducts:product[]=this.products

  // searchName(Name:string){
  //   const filterProduct=this.products.filter((product)=>{
  //     return product.name.toLocaleLowerCase().startsWith(Name.toLocaleLowerCase())
  //   })
  //   this.filterProducts=filterProduct;
  // }
  // searchModel(Model:string){
  //   const filterProduct=this.products.filter((product)=>{
  //     return product.model.toLocaleLowerCase().startsWith(Model.toLocaleLowerCase())
  //   })
  //   this.filterProducts=filterProduct;
  // }

search(Name:string){
  const filterProduct=this.products.filter((product)=>{
        return product.name.toLocaleLowerCase().startsWith(Name.toLocaleLowerCase())
      })
      this.filterProducts=filterProduct;
      console.log(this.filterProducts);
  const filterProduct2=this.products.filter((product)=>{
    return product.model.toLocaleLowerCase().startsWith(Name.toLocaleLowerCase())
  })
  this.filterProducts = this.filterProducts.concat(filterProduct2)

}


  Reset(){
    this.filterProducts=this.products;
  }


  deleteProduct(p:product){
    var deletedProductIndex = this.addToArray.findIndex(product => product.id == p.id);
    this.addToArray.splice(deletedProductIndex,1)
    console.log(deletedProductIndex)
  }

  addToTeamProdict:product[]=[]
  AddToTeam(pr:product){
    this.addToTeamProdict.push(pr);
    console.log(this.addToArray)
    this.service.SetTeamProduct(this.addToTeamProdict);
  }



  // addproductForm:FormGroup;
  // id:Number=0
  // img:string=''
  // name:string=''
  // constructor(private formBulider:FormBuilder){
  //   this.addproductForm=this.formBulider.group({
  //     id:[''],
  //     img:[''],
  //     name:['']

  //   })
  // }

  // submit(){
  //   var product={id:this.id,img:this.img,name:this.name}
  //   console.log(this.name);
  //   console.log(this.img);
  //   console.log(this.id);
  // }

  // AddproductForm:FormGroup;
  // constructor(private formBuilder:FormBuilder){
  //   this.submit();
  // }
  // submit(){
  // //  this.addToArray.push(this.addProductForm)
  //   this.AddproductForm=this.formBuilder.group({
  //     productId:[""],
  //     productImage:[""],
  //     productName:['']
  //   });
  //   console.log(this.AddproductForm.value);
  // }

  name:string="sara";
  price:Number=2220;
  id:Number=12;
  model:string="lorem";
  img:string="";
  qun:Number=15;
  desc:string="loremmmmmmm";

  AddProductForm:FormGroup;

  constructor(private Builder:FormBuilder,private service:SharedDataService) {
    this.AddProductForm=this.Builder.group({
      id:[''],
      img:[""],
      name:[''],
      model:[''],
      desc:[''],
      price:[''],
      qun:['']
    })

}
Submit()
{
  // console.log( this.AddProductForm.value);
  // this.products.push(this.AddProductForm.value)
  const newProduct:product={
    id: this.AddProductForm.get('id')?.value,
    imageSrc: this.AddProductForm.get('img')?.value,
    name: this.AddProductForm.get('name')?.value,
    model: this.AddProductForm.get('model')?.value,
    describtion: this.AddProductForm.get('desc')?.value,
    price: this.AddProductForm.get('price')?.value,
    quantity: this.AddProductForm.get('qun')?.value,
  }
  this.filterProducts.push(newProduct)
  this.AddProductForm.reset()
}
}

