import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Publication} from '../model/publication';
import {JobDtos} from '../model/job-dtos';
import {saveAs} from 'file-saver';

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) {}
  getCountJobsInEachDay() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});
    // return this.http.get<JobDtos>('http://localhost:9001/job/count/for/each/day', {
    return this.http.get<JobDtos>('http://192.168.42.20:8765/bibliography/job/count/for/each/day', {
      headers
    });
  }

  getReport() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});
    return this.http.get('http://192.168.42.20:8765/report-service/generate', {
      headers,
      observe: 'response',
      responseType: 'blob'
    }).subscribe(value => {
      console.log(value);
      const blob = new Blob([value.body], {type: 'application/pdf'});
      const filename = 'report';
      saveAs(blob, filename);
    });
  }

  crateNewUser(newLogin: string) {
    const login = {
      password: '',
      login: ''
    };
    login.login = newLogin;
    login.password = 'tomek';
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json'});
    this.http.post('http://192.168.42.20:8765/authorization-service/auth/signup', login, {
      headers
    }).subscribe((value => {
      console.log(value);
    }), error1 => console.log(error1));
  }
}
