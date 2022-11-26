import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CommonService } from 'src/app/service/common.service';
// import {img} from '../../../assets/image/';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  constructor(private commonService: CommonService, private cartService: CartService) { }

  ngOnInit(): void {
    this.commonService.getProducts().subscribe( response =>{
      this.productList = response;

      this.productList.forEach((a: any) =>{
        Object.assign(a, { quantity: 1, total: a.price});
      })
    })
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
  }



}
