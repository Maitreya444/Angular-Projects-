import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  public productname : string | undefined
  public productprice : number | undefined
  public positivechange : number | undefined 
  public priviousprice : number | undefined
  public favorite : boolean | undefined
  public sale : boolean | undefined

  public product: Product | undefined;

  constructor(){}

  ngOnInit(){
      this.productname = 'India Royal Basmati Rice';
      this.productprice = 200;
      this.favorite = false;

      this.product ={
        name : "IndiaGate Basmati Rice",
        oldprice : 500,
        price : 380,
        isOnSale : true,
        InCart : 0
      };

  }

      incrementInCart(this: any) {
      this.product.InCart++;
      console.warn('button clicked');
}
}

