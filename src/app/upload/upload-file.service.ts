import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Publication} from '../model/publication';
import { saveAs } from 'file-saver';
// import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import {JSONP_ERR_WRONG_RESPONSE_TYPE} from '@angular/common/http/src/jsonp';
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

  convertDocToPdf(file: File) {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: token});

    // @ts-ignore
    return this.http.post('http://localhost:9001/upload/docx/to/pdf',
      formdata, {
      headers,
      observe: 'response',
      responseType: 'blob'
    })
      .subscribe(response => {
        console.log(response);

        const blob = new Blob([response.body], {type: 'application/pdf'});
        const filename = 'file.pdf';
        saveAs(blob, filename);
      },
    );
  }

  orderBigliography(file: File) {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: token});

    return this.http.post('http://localhost:9001/upload/bibliography/order',
      formdata, {
        headers,
        observe: 'response',
        responseType: 'blob'
      })


      .subscribe(response => { // download file
          console.log(response);
          const blob = new Blob([response.body], {type: 'text/plain'});
          const filename = 'file.txt';
          saveAs(blob, filename);
        },
      );
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

    this.http.get<Publication>('http://localhost:9001/job/count/for/each/day', {
      headers
    })
      .subscribe((value) => {
        console.log( value);
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
