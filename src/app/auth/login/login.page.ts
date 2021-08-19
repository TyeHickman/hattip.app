import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private  router:  Router, public authService: AuthService ) { }

  ngOnInit() {
  }

  async login(form){
    // this.authService.login(form.value).subscribe((res)=>{
    //   this.router.navigateByUrl('home');
    // });
    try {
      const user = await Auth.signIn(form.value.username, form.value.password);
      console.log(user);
      if(this.authService.isAuthenticated(form.value.username)){
        console.log("Welcome to Hat-Tip!!!!!");
      }
    } catch (error) {
      console.log('error signing in', error);
    }
  }

}
