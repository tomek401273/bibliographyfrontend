import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Publication} from '../model/publication';
import {JobDtos} from '../model/job-dtos';

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) {}
  getCountJobsInEachDay() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});
    return this.http.get<JobDtos>('http://localhost:9001/job/count/for/each/day', {
      headers
    });
  }

  getReport() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});
    return this.http.get('http://localhost:8080/generate', {
      headers
    });
  }
}
