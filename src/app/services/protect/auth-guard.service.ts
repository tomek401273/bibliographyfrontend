import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {LogingService} from '../loging.service';
import {Observable} from 'rxjs/Observable';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Injectable()
export class AuthGuard implements CanActivate {
  private error: SwalComponent = new SwalComponent({
    position: 'top',
    type: 'error',
    title: 'To continue log in',
    showConfirmButton: false,
    timer: 1500,
    showCloseButton: true
  });

  constructor(private logingService: LogingService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.logingService.isAuthentication()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
            this.error.show();
          }
        }
      );
  }
}
