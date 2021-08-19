import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { Auth } from 'aws-amplify';
import { AlertController } from '@ionic/angular';
import { formatCurrency } from '@angular/common';
import { APIService } from 'src/app/API.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  username: string;
  password: string;
  email: string;

  constructor(  private  authService:  AuthService, 
                private  router:  Router, 
                public alertController: AlertController,
                public apiService: APIService) { }

  ngOnInit() {
  }

  async register(form) {
    
    console.log(form.value);

    //TODO: uncomment for real user registration
    try {
      const { user } = await Auth.signUp({
          username : form.value.username,
          password : form.value.password,
          attributes: {
              email : form.value.email 
          }
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async openConfirm( form ) {
    const alert = await this.alertController.create({
      header: 'Confirm Account For ' + form.value.email,
      message: "Please enter the confirmation code sent to " + form.value.email,
      inputs: [
        {
          name: 'code',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'Resend',
          handler: () => {
            console.log('Resending Code...');
            this.resendCode( form );
          }
        }, 
        {
          text: 'Confirm',
          handler: data => {
            console.log('Confirming Account... ');
            this.confirmSignUp(form.value.username, data.code);
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmSignUp(username, code) {
    console.log("Sending Code for " + code);
    try {
      await Auth.confirmSignUp(username, code);

      //TODO: create a journal once the user is signed up...
      // await this.apiService.CreateJournal()
      //is the user's 'sub' property permanent? it is...
      //use this as the userid for the journal interface.
    } catch (error) {
        console.log('error confirming sign up', error);
    }
    this.router.navigate(['login']);
  }

  async resendCode( form ){
    this.openConfirm(form);
  }

}

