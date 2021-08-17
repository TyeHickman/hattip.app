import { Component } from '@angular/core';
import { Entry } from '../entry-container/entry';
import { ToastController } from '@ionic/angular';
import { APIService } from '../API.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public apiService: APIService, public router: Router) {}
  title = "Reflect";
  items = [];
  errorMessage: string;

  
  //TODO: define some methods...
  editItem(item, index){
    console.dir(item);
  }

  openItem(item, index){
    this.router.navigate(['tabs/tab1'])
  }

  ionViewDidEnter() {
    console.log("did load...");
    this.loadEntries();
  }

  loadEntries(){
    this.apiService.ListEntries().then((res) => {
      this.items = res.items;
    });
    console.log('Loading Entries....');
  }


}
