import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LogingService} from '../services/loging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  private isAuthenticated = false;
  private adminPanel = false;
  constructor(private router: Router, private logingService: LogingService) { }
  ngOnInit() {
    this.isAdmin(localStorage.getItem('role'));
    this.logingService.loginSuccessful.subscribe(
      (role: string) => {
        this.isAdmin(role);
      }
    );
  }

  isAdmin(role: string) {
    if (role === 'admin, user') {
      this.adminPanel = true;
    //  do something
    }
  }

  onRedirect(page) {
    this.router.navigate([page]);
  }

  ngDoCheck() {
    this.isAuthenticated = this.logingService.isAuthenticated();

    this.logingService.logoutEmitter.subscribe(
      (logout: boolean) => {
        if (logout) {
          this.adminPanel = false;
          this.router.navigate(['/']);
        }
      }
    );
  }
}
