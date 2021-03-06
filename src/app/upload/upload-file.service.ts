import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Publication} from '../model/publication';
import {saveAs} from 'file-saver';
// import { Observable, Subscriber } from 'rxjs';
import {tap, map, filter} from 'rxjs/operators';
import {JSONP_ERR_WRONG_RESPONSE_TYPE} from '@angular/common/http/src/jsonp';
import {User} from '../model/user';
import {UserDto} from '../model/user-dto';
import {Server} from '../model/server';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('login', localStorage.getItem('login'));
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: token});
    const req = new HttpRequest('POST', Server.address + 'bibliography/upload/file', formdata, {
      // const req = new HttpRequest('POST', 'http://192.168.42.66:8765/bibliography/post', formdata, {
      headers,
      reportProgress: true,
      responseType: 'text',
    });

    // return this.http.request(req);


    // @ts-ignore
    return this.http.post(Server.address + 'bibliography/upload/file', formdata, {
      headers,
      observe: 'response',
      responseType: 'text'
    });
  }

  addNewJob(fileName) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: token});
    const login = localStorage.getItem('login');

    // @ts-ignore
    return this.http.post(Server.address + 'bibliography/job/save/new?login=' + login + '&fileName=' + fileName, null, {
      headers,
      observe: 'response',
      responseType: 'text'
    });
  }

  convertDocToPdf(file: File) {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: token});

    // @ts-ignore
    // return this.http.post(Server.address+'bibliography/upload/docx/to/pdf',
    // return this.http.post('http://localhost:8080/conversion?format=pdf',
    return this.http.post(Server.address + 'report-service/conversion?format=pdf',
      formdata, {
        headers,
        observe: 'response',
        responseType: 'blob'
      });
  }

  orderBigliography(file: File) {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: token});

    return this.http.post(Server.address + 'bibliography/upload/bibliography/order',
      formdata, {
        headers,
        observe: 'response',
        responseType: 'blob'
      });
  }

  login(user: User) {
    const userDto = new UserDto(user.login, user.password);
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json'});
    return this.http.post(Server.address + 'authorization-service/login', userDto, {
      headers,
      observe: 'response',
      responseType: 'text'
    });
  }

  getFiles(): Observable<Object> {
    return this.http.get('http://localhost:8080/upload/getallfiles');
  }

  getSth() {
    return this.http.get('http://localhost:8080/getdata');
  }


  getLogic() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});

    this.http.get<Publication>(Server.address + 'bibliography/job/count/for/each/day', {
      headers
    })
      .subscribe((value) => {
        console.log(value);
      }, error1 => console.log(error1));
  }

// .pipe(
//     map(value => {
//   console.log(value.authorName);
//   const pub: Publication= new Publication(value.authorName, value.publicationYear);
//   return pub;
// })
// )


}
