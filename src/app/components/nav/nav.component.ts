import { Component } from '@angular/core';
import { CardComponent } from './../card/card.component';
import { product } from './../../../Models/product';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(){}
  menuVariable:boolean = false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
  }
}
