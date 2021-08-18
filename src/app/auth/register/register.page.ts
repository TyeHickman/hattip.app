import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  username: string;
  password: string;
  email: string;

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }

  async register(form) {
    
    console.log(form.value);

    //TODO: uncomment for real user registration
    // try {
    //   const { user } = await Auth.signUp({
    //       username : form.value.username,
    //       password : form.value.password,
    //       attributes: {
    //           email : form.value.email 
    //       }
    //   });
    //   console.log(user);
    // } catch (error) {
    //   console.log('error signing up:', error);
    // }
  }

  openConfirm(){
    console.log('Confirm Registration...');
    let confirmArea = document.getElementById("confirmation");
    let confirmInput = document.createElement('ion-input')
    confirmArea.appendChild(confirmInput)
  }


}

