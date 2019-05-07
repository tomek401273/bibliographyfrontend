import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LogingService {

  constructor(private httpClient: HttpClient) {
  }


  isAuthenticated() {
    // if (localStorage.getItem('role') === 'user' || localStorage.getItem('role') === 'admin, user') {
    //   return true;
    // } else {
    //   return false;
    // }
    return false;
  }

  isAuthentication() {
    const promise = new Promise(
      (resolve => {
        resolve(this.isAuthenticated());
      })
    );
    return promise;
  }
}
