import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-card',

  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
 @Input() allProducts : any;

constructor(private proSer : ProductService){

}

addtoCart(pro : any){
  this.proSer.addToCart(pro)
}
}
