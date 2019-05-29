import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/adminService';
import {JobDtos} from '../../model/job-dtos';
import {saveAs} from 'file-saver';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-admin-information',
  templateUrl: './admin-information.component.html',
  styleUrls: ['./admin-information.component.css']
})
export class AdminInformationComponent implements OnInit {
  public graph = {
    data: [
      { x: ['2013-10-04 22:23:00', '2013-10-04 22:24:00', '2013-11-06 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: [1, 10, 10, 3, 6],
        fill: 'tozeroy',
      }
    ],
    layout: {width: 1000, height: 500, title: 'A Fancy Plot'}
  };

  private error: SwalComponent = new SwalComponent({
    position: 'top',
    type: 'error',
    title: 'Something something go wrong. Please contact with our service.',
    showConfirmButton: false,
    timer: 1500,
    showCloseButton: true
  });


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

  ngOnInit() {
  }
  getReport() {
    this.adminService.getReport().subscribe(value => {
      console.log(value);
      const blob = new Blob([value.body], {type: 'application/pdf'});
      const filename = 'report';
      saveAs(blob, filename);
    }, error1 => {
      console.log(error1);
      this.error.show();
    });
  }

}
