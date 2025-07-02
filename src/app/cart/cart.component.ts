import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(
    private proSer: ProductService,
    private authSer : AuthService
  ) { }

  cartItems: any[] = []
cartlength : any
  ngOnInit(): void {
    const userInfo = this.authSer.getCurrentUser()
    
    const userid = userInfo.id
    console.log(userid);

    this.proSer.getCartByUserId(userid).subscribe((res) => {
      this.cartItems = res
      console.log(this.cartItems);
   this.cartlength = res[0].items.length
    })

  }

  get totalItems() {
    return this.cartItems.reduce((acc: any, item) => acc + item.quantity, 0);
  }

  get totalPrice() {
    return this.cartItems.reduce((acc: number, item) => acc + item.price * item.quantity, 0).toFixed(2);
  }

  increaseQty(item: any) {
     this.proSer.increaseQty(item)
     console.log(item);
     
  }

  decreaseQty(item: { quantity: number; }) {
    this.proSer.decreaseQty(item)
  }

  removeItem(item: any) {
   this.proSer.removePro(item)
}

}