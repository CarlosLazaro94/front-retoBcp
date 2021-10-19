import {HttpHeaders, HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

const token = environment.token;

export class Rest {
  httpClient: HttpClient;

  constructor() {
  }

  static makeHeaderVariables() {
    console.log(token.toString())
   
    const date = new Date();
    const timeZoneOffset = date.getTimezoneOffset() * 60000; // offset in milliseconds
    const messageId = (new Date(Date.now() - timeZoneOffset)).toISOString().slice(0, -1).replace(/[-|:|.|T]/g, '');
    
    const headers = new HttpHeaders({
      'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjM0NjI4NDkyLCJzdWIiOiJ1c2VyQGdtYWlsLmNvbSIsImlzcyI6Im1haW4iLCJleHAiOjE2MzUyMzMyOTJ9.bymd5xV7JWDNgSKJZlkUwy4VZWBru1r-sj-ATbTg5bU"
    });

    return headers;
  }

  postPromise(url, data, params): Promise<any> {
    const headers = {headers: new HttpHeaders(params)};

    return this.httpClient
      .post(url, data, headers)
      .toPromise()
      .then(
        (res: Response) => Promise.resolve(res)
      )
      .catch(
        (err) => Promise.reject(err)
      );
  }

}
