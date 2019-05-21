import {Component, OnInit, ViewChild} from '@angular/core';
import {UploadFileService} from './upload/upload-file.service';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {LogingService} from './services/loging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bibilography-frontend';
  private loggingTimeout;
  @ViewChild('info') private info: SwalComponent;

  constructor(private uploadService: UploadFileService, private logingService: LogingService) {}


  ngOnInit() {
    this.logingService.loginSuccessful
      .subscribe(
        () => {
          this.controlActiveSession();
        }
      );

    this.logingService.logoutEmitter.subscribe(
      (logout: boolean) => {
        if (logout) {
          clearTimeout(this.loggingTimeout);
        }
      }
    );
  }


  getLogicM() {
    this.uploadService.getLogic();
  }




  controlActiveSession() {
    const currentDate = new Date().getTime();
    const expiredToken: number = Number(localStorage.getItem('expiredToken'));
    const remainToken = expiredToken - currentDate;
    console.log(remainToken);

    if (expiredToken > currentDate) {
      this.loggingTimeout = setTimeout(() => {
        if (this.logingService.isAuthenticated()) {
          this.info.show();
          this.logingService.logOut();
        }
      }, remainToken);
    } else {
      this.logingService.logOut();
    }
  }
}
