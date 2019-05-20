import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../services/adminService';
import {User} from '../../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('form') private signUp: NgForm;
  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = new User(
      this.signUp.value.login,
      this.signUp.value.passwords.password);
    this.adminService.crateNewUser(user);
  }
}
