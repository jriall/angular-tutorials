import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const POST_URL = 'example.com/123';
const GET_URL = 'example.com/456';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(POST_URL, servers, {headers: headers});
  }

  getServers() {
    return this.http.get(GET_URL).pipe(
      map(
        (res: Response) => {
          const data = res.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch (
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      )
    );
  }

  getAppName() {
    return this.http.get(GET_URL).pipe(
      map(
        (res: Response) => res.json();
      )
    )
  }
}
