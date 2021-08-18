import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { Auth } from 'aws-amplify';
import { AlertController } from '@ionic/angular';
import { formatCurrency } from '@angular/common';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  username: string;
  password: string;
  email: string;

  constructor(private  authService:  AuthService, private  router:  Router, public alertController: AlertController) { }

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

  async openConfirm( form ) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Confirm Account For ' + form.value.email,
      // message: item ? "Please edit item..." : "Please add item...",
      message: "Please enter the confirmation code sent to " + form.value.email,
      inputs: [
        {
          name: 'code',
          type: 'text',
          // value: item ? item.name : null
        }
      ],
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   cssClass: 'primary',
        //   handler: () => {
        //     console.log('Confirm Cancel...');
        //   }
        // },
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
            //TODO: send confirmation to aws
            this.confirmSignUp(form.value.username, data.code);
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmSignUp(username, code) {
    console.log("Sending Code for " + code);
    // try {
    //   await Auth.confirmSignUp(username, code);
    // } catch (error) {
    //     console.log('error confirming sign up', error);
    // }
    this.router.navigate(['login']);
  }

  async resendCode( form ){
    this.openConfirm(form);
  }

}

