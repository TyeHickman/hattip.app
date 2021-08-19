import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';
import { APIService } from '../API.service';
import { Journal } from '../journal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //TODO: get this from config file
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';
  authSubject  =  new  BehaviorSubject(false);
  userJournal: Journal;

  constructor(  private  httpClient:  HttpClient, 
                private  storage:  Storage, 
                public jwtHelper: JwtHelperService, 
                public apiService: APIService) { }


  register(){
    //TODO: move register method to service
  }


  login(){
    //TODO: move login method to service
  }


  async logout() {
    //TODO: move logout to service
  }

  isLoggedIn() {
    
    //Use this for CanLoad in routing??
    
  }

  public isAuthenticated(username): boolean {
    //example
    //CognitoIdentityServiceProvider.2re5hdsb5rotpru45pj41e5htr.testuser.idToken
    //TODO: get the key prefix from the user response...
    let tokenName = 'CognitoIdentityServiceProvider.2re5hdsb5rotpru45pj41e5htr.' + username +'.idToken';
    const token = localStorage.getItem(tokenName);
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
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
