import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit{
productList:any;

  constructor(private productServeice: ProductsService){ }
  ngOnInit(): void {
    
    this.getAllProducts();
  }

  getAllProducts(){
    this.productServeice.getProduct().subscribe((product:any)=>{
      
      this.productList = product;
      console.log(product);
    },(error:any)=>{
      console.log(error);
      
    })
  }

}
