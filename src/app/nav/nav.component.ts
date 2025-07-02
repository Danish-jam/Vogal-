import { Component, OnInit } from '@angular/core';
import { NavbarCarouselService } from '../Services/NavbarCarouselService.service';
import { AuthService } from '../Services/auth.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  navLink: any
  spinner: boolean = true
  isLogin: boolean = false
  cart!: any
  cartlength: number = 0
  searchitem: string = ''
  allProducts: any
  searchname: any
  constructor(
    private navCarService: NavbarCarouselService,
    private authSer: AuthService,
    private proSer: ProductService

  ) {

  }


  ngOnInit(): void {
    this.navCarService.getNavLinkGroup().subscribe((res) => {
      this.navLink = res
      console.log(res);

    })



    const userInfo = this.authSer.getCurrentUser()


    if (userInfo.id) {
      this.proSer.getCartByUserId(userInfo.id).subscribe((res) => {
        this.cartlength = res[0].items.length
        console.log(this.cartlength);
      })
    }
    this.isLogin = this.authSer.isLoggedIn()
    console.log(this.isLogin);

  }


  logout() {
    this.authSer.logout()
    window.location.href = '/';

  }

  addtoCart(item: any) {

  }
  searchPro() {
    //   const text = this.searchitem
    //   this.spinner = true;
    //   console.log(this.searchitem);

    //   if (text == '') {
    //     this.allProducts = [];
    //     this.spinner = false;
    //   } else {
    //     this.proSer.searchPro(text).subscribe((res) => {
    //       this.allProducts = res;
    //       this.spinner = false;
    //     });
    //   }
  }

  onSearchChange(value: string): void {
    this.spinner = true;
    if (value.trim() == '') {
      this.allProducts = [];
      return;
    }

    this.proSer.searchPro(value.trim()).subscribe((res) => {
      this.allProducts = res;
      this.spinner = false;
    });
  }

}
