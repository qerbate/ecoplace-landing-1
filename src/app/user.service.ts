import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {User} from './user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
const apiUrl = 'http://localhost:9000/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User ={
  name: '',
  email: '',
  message: ''
  
};
  constructor(private http: HttpClient) { }
  postUser(user: User){
    return this.http.post(apiUrl+'/register',user,httpOptions);
  }
}
