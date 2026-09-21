import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private userApi= 'https://jsonplaceholder.typicode.com/users';
  private clientApi = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient){

  }

  getUserData(){
    return (this.http.get(this.userApi))
  }

  getposts(){
    return (this.http.get(this.clientApi));
  }
}
