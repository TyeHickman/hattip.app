import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { Auth } from 'aws-amplify';
import { AlertController } from '@ionic/angular';
import { formatCurrency } from '@angular/common';
import { APIService, CreateJournalInput } from 'src/app/API.service';
import { JournalService } from 'src/app/journal.service';
import { Journal } from 'src/app/journal';




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
                public apiService: APIService,
                public journalService: JournalService) { }

  ngOnInit() {
  }

  async register(form) {
    
    console.log(form.value);
    try {
      // const { user } = 
      await Auth.signUp({
          username : form.value.username,
          password : form.value.password,
          attributes: {
              email : form.value.email 
          }
      }).then((suRes) => {
        console.log("Creating New User Journal...");
        // console.log(suRes)
        let dateStamp = new Date();
        
        // //TODO: create a journal once the user is signed up...
        let journalInput : CreateJournalInput = {
          name: form.value.username + "'s Journal",
          userSub: suRes.userSub,
          prompt: "What are you grateful for today?",
          currentStreak: 0,
          longestStreak: 0,
          createdOn: dateStamp.toISOString(),
          lastUpdate: dateStamp.toISOString()

        }
        this.journalService.createJournal(journalInput);

      });
      // console.log(user);
      // console.log(user.storage)


      //open the confirm prompt for the emailed code.
      this.openConfirm( form );
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
            this.confirmSignUp(form, data.code);
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmSignUp(form, code) {
    console.log("Sending Code for " + form.value.username);
    try {
      let userSub = null;
      await Auth.confirmSignUp(form.value.username, code).then((res) =>{
        console.log(res);
        if (res === 'SUCCESS'){
          // this.router.navigate(['login']);
          this.authService.login(form);
        }
        else {
          this.openConfirm( form );
        }
      });
      
    } catch (error) {
        console.log('error confirming sign up', error);
    }
    
  }

  async resendCode( form ){
    this.openConfirm(form);
    try {
      await Auth.resendSignUp(form.value.username);
      console.log('code resent successfully');
  } catch (err) {
      console.log('error resending code: ', err);
  }
  }

}

