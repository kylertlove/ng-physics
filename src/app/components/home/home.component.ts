import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../ng-statistics/statistics/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private stats: StatisticsService) {
    // console.log(stats.mean([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]));
    console.log(stats.median([1,2,3,4,5,6,5,4,3,2,1]));
   }

  ngOnInit() {
  }

}
