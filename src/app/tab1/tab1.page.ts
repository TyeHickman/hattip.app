import { Component } from '@angular/core';
import { APIService } from '../API.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private apiService: APIService ) {
    
  }

  user : string;
  entryDate : string;
  prompt : string;
  streak : number;

  ionViewDidEnter() {
    console.log("View entered the chat...");
    //TODO: get user, streak, and prompt from user pool
    let dateStamp = new Date();
    this.user = 'Dev1';
    this.entryDate = dateStamp.toLocaleDateString();
    this.prompt = "What's beatiful about today?";
    this.streak = 0
  }
}
