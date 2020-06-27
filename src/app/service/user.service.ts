import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.httpclient.get(this.baseUrl);
  }

  postUsers(user): Observable<any>{
    return this.httpclient.post(this.baseUrl, user);
  }

  putUsers(user) {
    console.log(user);
    return this.httpclient.patch(this.baseUrl + '/' + user.id, JSON.stringify({name: 'Prashant'}));
  }

  deleteUsers(id) {
    return this.httpclient.delete(this.baseUrl + '/' + id);
  }
}
