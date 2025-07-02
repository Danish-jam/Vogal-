import { Component, OnInit } from '@angular/core';
import { LogoService } from '../Services/logo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-LogoFrame',
  templateUrl: './LogoFrame.component.html',
  styleUrls: ['./LogoFrame.component.css'],
 
})
export class LogoFrameComponent implements OnInit{

brandlogo : any[] = []

constructor(
  private logoSer : LogoService
){}


ngOnInit(): void {
    this.logoSer.getSiteLogo().subscribe((res) =>{
      this.brandlogo = res.filter(val => val.showHomePge === "true");
    })
}






}




