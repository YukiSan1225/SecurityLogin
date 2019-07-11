import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../model/login.model';
import { Register } from '../model/register.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }

  private url='http://localhost:8080';

  getUsers(){
    return this.http.get<Login[]>(this.url+'/login/getInformation');
  }
  createUser(register){
    return this.http.post<Register>(this.url+'/register',register);
  }
}
