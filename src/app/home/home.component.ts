import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../upload/upload-file.service';
import {HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private uploadService: UploadFileService,
              private router: Router) { }

  ngOnInit() {
  }

  handleFile(uploadFile: {file: File}) {
    console.log('handle1');
    console.log(uploadFile.file.name);
    this.uploadService.pushFileToStorage(uploadFile.file)
      .subscribe(
        (value: HttpResponse<string>) => {
          console.log(value.body);
          if (value.body !== undefined){
            const res = JSON.parse(value.body);
            localStorage.setItem('bibliography', value.body);
            console.log(res);
            this.router.navigate(['/summary']);
          }
          // value.body;
          // if (value.type === HttpEventType.UploadProgress) {
          //   this.progress.percentage = Math.round(100 * value.loaded / value.total);
          // } else {
          //   console.log('File is completely uploaded');
          // }
        },
          error1 => console.log(error1));
  }

  handleFile2(uploadFile: {file: File}) {
    console.log('handle2');
    console.log(uploadFile.file.name + uploadFile.file.lastModified);
  }
}
