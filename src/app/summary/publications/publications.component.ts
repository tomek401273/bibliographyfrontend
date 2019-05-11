import {Component, Input, OnInit} from '@angular/core';
import {Publication} from '../../model/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  @Input() publications: Publication[];
  displayedColumns: string[] = ['authorName', 'publicationYear'];

  constructor() { }

  ngOnInit() {
    console.log('publication componett inside');
    console.log(this.publications);
  }



}
