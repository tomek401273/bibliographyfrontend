import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/adminService';
import {JobDtos} from '../model/job-dtos';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  public graph = {
    data: [
      { x: ['2013-10-04 22:23:00', '2013-10-04 22:24:00', '2013-11-06 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: [1, 10, 10, 3, 6],
        fill: 'tozeroy',
      }
    ],
    layout: {width: 1000, height: 500, title: 'A Fancy Plot'}
  };
  constructor(private adminService: AdminService) {
    this.adminService.getCountJobsInEachDay()
      .subscribe((value: JobDtos) => {
        console.log(value);
        this.graph.data[0].x = value.dateList;
        this.graph.data[0].y = value.counts;
        console.log(this.graph.data[0].x);
        }
      );
  }
  // type: 'scatter',
  // fill: 'tozeroy',
  // mode: 'lines'
  ngOnInit() {
  }

}
