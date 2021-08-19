import { Component } from '@angular/core';
import { APIService } from './API.service';
// import { Journal } from './journal';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // journal:Journal

  constructor( private apiService : APIService) {

    // this.initializeJournal();
  }

  // initializeJournal() {
  //   console.log("Initialize Development Journal...");

  //   // this tries to get the dev journal
  //   // TODO: change this method to find the Journal ID associated with the user.
  //   this.apiService.GetJournal('1ca040ee-8d00-4c94-958c-0320a361a964').then((evt) => {
  //     this.journal = evt;
  //     console.dir(this.journal);
  //   });

  // }


}
