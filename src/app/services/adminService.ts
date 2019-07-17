import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Publication} from '../model/publication';
import {JobDtos} from '../model/job-dtos';
import {saveAs} from 'file-saver';
import {User} from '../model/user';
import {UserDto} from '../model/user-dto';
import {Server} from '../model/server';

@Injectable()
export class AdminService {
  private data = [];

  constructor(private http: HttpClient) {
  }


  getCountJobsInEachDay0() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});
    return this.http.get<JobDtos>(Server.address + 'bibliography/job/count/for/each/day', {
      headers
    });
  }

  getCountJobsInEachDay() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});
    return this.http.get(Server.address + 'bibliography/job/count/for/each/day2', {
      headers
    }).subscribe((value: any[]) => {
        console.log('localStorageSetJobs');
        localStorage.setItem('jobs', JSON.stringify(value));
      }
    );
  }


  getReport() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});
    return this.http.get(Server.address + 'report-service/generate', {
      headers,
      observe: 'response',
      responseType: 'blob'
    });
  }

  crateNewUser(user: User) {
    console.log(user);
    const userDto = new UserDto(user.login, user.password);
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json'});
    return this.http.post(Server.address + 'authorization-service/auth/signup', userDto, {
      headers
    });
  }

}
