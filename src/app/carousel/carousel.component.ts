import { Component, OnInit } from '@angular/core';
import { NavbarCarouselService } from '../Services/NavbarCarouselService.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit{

  carousel: any;
 constructor(private navCarService : NavbarCarouselService){

 }

  ngOnInit(): void {
    this.navCarService.getCarouselData().subscribe((res) =>{
      this.carousel = res
      
    })
  }

}
