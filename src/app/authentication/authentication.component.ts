import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../upload/upload-file.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  loginOnServer() {
    this.uploadService.login();
  }

}
