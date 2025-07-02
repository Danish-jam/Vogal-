import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-allproducts',
  templateUrl: './proList.component.html',
  styleUrls: ['./proList.component.css'],
})
export class ProListComponent implements OnInit{
searchitem! : string
constructor (
  private proSer : ProductService
){

}
allProducts : product[] = []
ngOnInit(): void {
      this.proSer.getProducts().subscribe((res : product[]) =>{
        this.allProducts = res
      })
}

addtoCart(pro : any){
  this.proSer.addToCart(pro)
}
}
