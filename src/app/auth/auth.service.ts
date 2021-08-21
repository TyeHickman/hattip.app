import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { Router } from  "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';
import { APIService } from '../API.service';
import { Journal } from '../journal';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //TODO: get this from config file
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';
  authSubject  =  new  BehaviorSubject(false);
  userJournal: Journal;
  userInfo : User;
  

  constructor(  private  httpClient:  HttpClient, 
                private  storage:  Storage, 
                public jwtHelper: JwtHelperService, 
                public apiService: APIService,
                public router: Router) { }


  register(){
    //TODO: move register method to service
  }


  async login(form){
    //TODO: move login method to service
    try {
      const user = await Auth.signIn(form.value.username, form.value.password);
      console.log(user);
      if(this.isAuthenticated()){
        console.log("Welcome to Hat-Tip!!!!!");
        this.router.navigate(['tabs']);
      }
    } catch (error) {
      console.log('error signing in', error);
    }
  }


  async logout() {
    //TODO: move logout to service
  }

  public isAuthenticated(): boolean {
    //example
    //CognitoIdentityServiceProvider.2re5hdsb5rotpru45pj41e5htr.testuser.idToken
    //TODO: get the key prefix from the user response...
    let username = localStorage.getItem('CognitoIdentityServiceProvider.2re5hdsb5rotpru45pj41e5htr.LastAuthUser');
    let tokenName = 'CognitoIdentityServiceProvider.2re5hdsb5rotpru45pj41e5htr.' + username +'.idToken';
    
    const token = localStorage.getItem(tokenName);
    // Check whether the token is expired and return
    // true or false
    console.log(!this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserInfo() : User {
    let username = localStorage.getItem('CognitoIdentityServiceProvider.2re5hdsb5rotpru45pj41e5htr.LastAuthUser');
    let userDataKey = 'CognitoIdentityServiceProvider.2re5hdsb5rotpru45pj41e5htr.' + username +'.userData';
    
    const userData = localStorage.getItem(userDataKey);
    // console.dir(JSON.parse(userData));
    let userDataParsed = JSON.parse(userData);
    console.log(userDataParsed.Username);
    let userSub = userDataParsed.UserAttributes[0].Value;
    let userName = userDataParsed.Username;
    let userInfo = {
      username : userName,
      usersub : userSub
    }
    return userInfo;
    

    
    // await Auth.currentUserInfo().then((userInfoRes)=>{
      
    //   console.log(userInfoRes);
    //   this.userSub = userInfoRes;
    // });

    // return this.userSub;
    
  }

  initializeJournal() {
    console.log("Initializing Your Journal...");

    // this tries to get the dev journal
    // TODO: change this method to find the Journal ID associated with the user.
    // this.apiService.GetJournal('1ca040ee-8d00-4c94-958c-0320a361a964').then((evt) => {
    //   this.userJournal = evt;
    //   console.dir(this.userJournal);
    // });



  }


}
