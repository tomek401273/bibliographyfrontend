import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Publication} from '../model/publication';
// import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: token});
    const req = new HttpRequest('POST', 'http://localhost:9001/upload/file', formdata, {
    // const req = new HttpRequest('POST', 'http://192.168.42.66:8765/bibliography/post', formdata, {
      headers,
      reportProgress: true,
      responseType: 'text',
    });

    // return this.http.request(req);


    // @ts-ignore
    return this.http.post('http://localhost:9001/upload/file', formdata, {
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

  login() {
    const login = {
      password: '',
      login: ''
    };
    login.login = 'tomek';
    login.password = 'tomek';
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json'});

    this.http.post('http://localhost:9001/login', login, {
    // this.http.post('http://192.168.42.66:8765/authorization-service/login', login, {
      headers,
      observe: 'response',
      responseType: 'text'
    })
      .subscribe((value: HttpResponse<string>) => {
        const token = value.headers.get('authorization');
        console.log(token);
        localStorage.setItem('token', token);
      }, error1 => console.log(error1));
  }

  getLogic() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Content-type': 'application/json', Accept: 'application/json', Authorization: token});

    this.http.get<Publication>('http://localhost:9001/pub', {
      headers
    })
      .pipe(
        map(value => {
          console.log(value.authorName);
          const pub: Publication= new Publication(value.authorName, value.publicationYear);
          return pub;
        })
      )
      .subscribe((value) => {
        console.log( value);
        console.log(value.authorName);
      }, error1 => console.log(error1));
  }
}
