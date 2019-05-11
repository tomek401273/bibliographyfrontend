import { Component, OnInit } from '@angular/core';
import {Bibliography} from '../model/bibliography';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  private readonly bibliography: Bibliography;
  constructor() {
    this.bibliography = this.getBibliographyFormLocalStorage();
  }

  ngOnInit() {
  }


  getBibliography(): Bibliography{
    return this.bibliography;
  }

  getBibliographyFormLocalStorage(): Bibliography {
    return  JSON.parse(localStorage.getItem('bibliography'));

  }

}
