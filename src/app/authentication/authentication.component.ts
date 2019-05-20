import {Component, OnInit, ViewChild} from '@angular/core';
import {UploadFileService} from '../upload/upload-file.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../model/user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  private message = '';
  private name = '';
  private password = '';
  @ViewChild('form') private singIn: NgForm;
  constructor(private uploadService: UploadFileService,
              private router: Router) {
  }

  ngOnInit() {
  }


  onRedirect(page) {
    this.router.navigate([page]);
  }

  onSubmit() {
    const user: User = new User(this.singIn.value.login, this.singIn.value.password);
    this.uploadService.login(user);
  }
}
