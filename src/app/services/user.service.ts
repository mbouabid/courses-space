import { Injectable } from '@angular/core';
import {User} from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  IsloggedIn = false
  baseUrl = '/api';
  constructor(private http: HttpClient) { }
  addUser(user: User): Observable<User>{  
    return this.http.post<User>(`${this.baseUrl}/addUser.php`,user);
  }
  logUser(username: string, password: string): Observable<any> {
		return this.http.post(`${this.baseUrl}/authUser.php`, JSON.stringify({"login": username, "password":password}));
	}
  
}
