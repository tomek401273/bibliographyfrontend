import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../services/adminService';
import {User} from '../../model/user';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {


  @ViewChild('form') private signUp: NgForm;

 private success: SwalComponent = new SwalComponent({
   position: 'top',
   type: 'success',
   title: 'Account has been created sucessfully',
   showConfirmButton: false,
 });

 private error: SwalComponent = new SwalComponent({
    position: 'top',
    type: 'error',
    title: 'Something go wrong. Please contact with our service',
    showConfirmButton: false,
    // timer: 1500
  });
  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = new User(
      this.signUp.value.login,
      this.signUp.value.passwords.password);
    this.adminService.crateNewUser(user).subscribe(
      (
        value => {
        console.log(value);
        this.success.show();
        this.router.navigate(['/']);
      }),
        error1 => {
          console.log(error1);
          this.error.show();
        });
  }
}
