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
import { JournalService } from '../journal.service';
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
  journal : Journal;
  

  constructor(  private  httpClient:  HttpClient, 
                private  storage:  Storage, 
                public jwtHelper: JwtHelperService, 
                public apiService: APIService,
                public journalService: JournalService,
                public router: Router) { }


  register(){
    //TODO: move register method to service
  }


  async login(form){
    try {
      const user = await Auth.signIn(form.value.username, form.value.password);
      console.log(user);
      if(this.isAuthenticated()){
        console.log("Welcome to Hat-Tip!!!!!");
        this.router.navigate(['tabs']);
      }
    } catch (error) {
      console.log('error signing in', error);
      alert("Invalid Credentials!");
      form.reset();
    }
  }


  async logout() {
    try {
      Auth.signOut({ global: true });
      console.log('Signout');
      this.router.navigate(['login']);
    }
    catch (error){
      console.log('error signing out: ')
    }
    
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
    
    let userInfo : User = {
      username : userName,
      usersub : userSub,
      // userJournalID : this.journal.id
    }

    let j = this.journalService.getJournal(userSub).then((journalInfo) => {
      console.log(journalInfo);
      this.journal = {
        id : journalInfo.id,
        name : journalInfo.name,
        prompt : journalInfo.prompt,
        currentStreak : journalInfo.currentStreak
      }
      userInfo.userJournalID = journalInfo.id;
      return this.journal
    });
    // return journ;

   
    console.dir(userInfo);

    return userInfo;
    
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
