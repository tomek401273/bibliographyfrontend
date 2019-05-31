import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-info2',
  templateUrl: './admin-info2.component.html',
  styleUrls: ['./admin-info2.component.css']
})
export class AdminInfo2Component implements OnInit {
  public graph = {
    data: [{ x: [1, 2, 3], y: [2, 5, 3], type: 'bar' }],
    layout: {autosize: false, title: 'A Fancy Plot'},
  };
  constructor() { }

  ngOnInit() {
  }

}
