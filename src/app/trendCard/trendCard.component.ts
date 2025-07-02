import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-TrendCard',

  templateUrl: './trendCard.component.html',
  styleUrls: ['./trendCard.component.css']
})
export class TrendCardComponent {
 @Input() product : any;
}
