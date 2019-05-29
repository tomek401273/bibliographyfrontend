import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../upload/upload-file.service';
import {HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {getAllRouteGuards} from '@angular/router/src/utils/preactivation';
import {LogingService} from '../services/loging.service';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private roleUser = '';
  private adminPanel = false;
  private error: SwalComponent = new SwalComponent({
    position: 'top',
    type: 'error',
    title: 'Something something go wrong. Please contact with our service.',
    showConfirmButton: false,
    timer: 1500,
    showCloseButton: true
  });

  constructor(private uploadService: UploadFileService,
              private router: Router, private logingService: LogingService) { }

  ngOnInit() {
    // const role = localStorage.get('role');
    // console.log(role);
    this.isAdmin(localStorage.getItem('role'));
    this.logingService.loginSuccessful.subscribe(
      (role: string) => {
        this.isAdmin(role);
      }
    );
  }

  handleFile(uploadFile: {file: File}) {
    console.log('handle1');
    console.log(uploadFile.file.name);
    this.uploadService.pushFileToStorage(uploadFile.file)
      .subscribe(
        (value: HttpResponse<string>) => {
          console.log(value.headers);
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
          error1 => {
          console.log(error1);
          this.error.show();
        });
  }

  handleFile2(uploadFile: {file: File}) {
    console.log('handle2');
    console.log(uploadFile.file.name + uploadFile.file.lastModified);
    this.uploadService.convertDocToPdf(uploadFile.file) .subscribe(
      response => {
        console.log(response);

        const blob = new Blob([response.body], {type: 'application/pdf'});
        const filename = 'file.pdf';
        saveAs(blob, filename);
      },
       error1 => {
         console.log(error1);
         this.error.show();
       }
    );
  }

  handleFile3(uploadFile: {file: File}) {
    console.log('handle3');
    console.log(uploadFile.file.name + uploadFile.file.lastModified);
    this.uploadService.orderBigliography(uploadFile.file)
      .subscribe(response => { // download file
        console.log(response);
        const blob = new Blob([response.body], {type: 'text/plain'});
        const filename = 'file.txt';
        saveAs(blob, filename);
      },
        error1 => {
          console.log(error1);
          this.error.show();
        }
    );
  }

  isAdmin(role: string) {
    if (role === 'admin, user') {
      this.adminPanel = true;
    }
  }
}
