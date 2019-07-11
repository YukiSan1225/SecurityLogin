import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login[]

  constructor(private router : Router,
              private lservice : LoginService) { }

  ngOnInit() {
    this.lservice.getUsers().subscribe(
      data=> {this.login = data}
    );
  }

}
