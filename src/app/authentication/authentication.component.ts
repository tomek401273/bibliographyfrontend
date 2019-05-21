import {Component, DoCheck, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UploadFileService} from '../upload/upload-file.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../model/user';
import {HttpResponse} from '@angular/common/http';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {LogingService} from '../services/loging.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit, DoCheck {
  private role = '';
  @ViewChild('form') private singIn: NgForm;
  @ViewChild('error') private error: SwalComponent;
  // @ViewChild('content') private content;
  private isAuthenticated = false;
  private loginUser = '';
  private roleUser = '';

  modalRef: BsModalRef;
  private message = '';

  private name = '';
  private password = '';

  constructor(
    private logginService: LogingService,
    private uploadService: UploadFileService,
    private router: Router, private modalService: BsModalService ) {
  }

  ngOnInit() {
  }
  ngDoCheck() {
    this.isAuthenticated = this.logginService.isAuthenticated();
    this.loginUser = localStorage.getItem('login');
    this.roleUser = localStorage.getItem('role');
  }

  onRedirect(page) {
    this.router.navigate([page]);
  }

  onSubmit(submittedForm) {
    const user: User = new User(submittedForm.value.login, submittedForm.value.password);
    console.log(user);
    this.uploadService.login(user).subscribe(
      (response: HttpResponse<string>) => {
        console.log(response);
        const token = response.headers.get('Authorization');
        this.role = response.headers.get('Credentials');
        localStorage.setItem('login', user.login);
        localStorage.setItem('token', token);
        localStorage.setItem('role', this.role);
        this.message = '';
        const expiredToken = new Date().getTime() + (30 * 60 * 1000);
        localStorage.setItem('expiredToken', expiredToken.toString());
        this.logginService.loginSuccessful.emit(this.role);
        this.modalRef.hide();
        this.router.navigate(['/home']);
      }, () => {
        this.somethingGoWrong();
      }
    );
  }

  somethingGoWrong() {
    localStorage.setItem('token', null);
    localStorage.setItem('role', null);
    this.message = 'Logging attempt failed. Please check your login and password';
    // this.error.show();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onLogOut() {
    this.logginService.logOut();
  }
}
