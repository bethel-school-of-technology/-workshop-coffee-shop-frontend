import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Connection to your backend
  endpoint: string = 'http://localhost:3000/api/users';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }
  //ADD new user
  signUp(user: User) {
    let api = `${this.endpoint}/add`;
    return this.http.post(api, user);
  }


  //LOGIN
  signIn(login) {
    let api = `${this.endpoint}/login`;
    return this.http.post(api, login);
  }

  //GET profile of current user
  getProfile(): Observable<User> {
    let api = `${this.endpoint}/profile`;
    return this.http.get<User>(api, { headers: this.headers })
  }

  //GET profile by ID
  getUserProfile(id: string): Observable<User> {
    let api = `${this.endpoint}/${id}`;
    return this.http.get<User>(api, { headers: this.headers });
  }

  //GET all users
  getAllUsers() {
    let api = `${this.endpoint}`;
    return this.http.get(api, { headers: this.headers })
  }

  //DELETE user by id
  deleteUser(id: string) {
    let api = `${this.endpoint}/${id}`;
    return this.http.delete(api, { headers: this.headers })
  }

  //UPDATE user by id
  updateUser(id: string, user: User) {
    let api = `${this.endpoint}/${id}`;
    return this.http.put(api, user, { headers: this.headers })
  }

  //Get Token from localstorage
  getToken() {
    return localStorage.getItem('access-token');
  }

  //function to help with AuthGuard
  get isLoggedIn(): boolean {
    let authToken = this.getToken();
    return (authToken !== null) ? true : false;
  }
}
