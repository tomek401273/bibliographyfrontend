import { Component, OnInit } from '@angular/core';
import {Bibliography} from '../model/bibliography';
import {BibliographyReturn} from '../model/bibliography-return';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'},
  {position: 10, name: 'Neon'},
];


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    const bibliography = this.getBibliography();
    console.log(bibliography);

  }


  getBibliography(): Bibliography{
    return  JSON.parse(localStorage.getItem('bibliography'));
  }

}
