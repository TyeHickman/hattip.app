import { Component } from '@angular/core';
import { Entry } from '../entry-container/entry';
import { ToastController } from '@ionic/angular';
import { APIService, EntriesByDateQuery, ModelSortDirection } from '../API.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { EntryViewModalPage } from '../modal/entry-view-modal/entry-view-modal.page';
import { IonRouterOutlet } from '@ionic/angular';
import { SortDirection } from 'aws-amplify';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';
import { filter } from 'rxjs/operators';
import { API, graphqlOperation } from '@aws-amplify/api';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( 
    public apiService: APIService, 
    public router: Router, 
    public modalController: ModalController,
    public authService: AuthService,
    private routerOutlet: IonRouterOutlet
    ) { this.getUserInfo()}
  title = "Reflect";
  items = [];
  errorMessage: string;
  EntryDetail : Entry;
  itemOpen = true;
  user : User;


  openItem(item, index){

    //TODO: open entry container and pass entry to it.
    // this.router.navigate(['tabs/tab1'])
    this.presentModal(item);

  }

  async presentModal(item) {
    const modal = await this.modalController.create({
      component: EntryViewModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'name' : item.entryTitle,
        'pastPrompt' : item.prompt,
        'entryDate' : item.createdOn,
        'entryTitle' : item.entryTitle,
        'entryBody' : item.entryBody

      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl


    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ionViewDidEnter() {
    console.log("did load...");
    this.loadEntries();
  }

  loadEntries(){

    let userInfo = this.authService.getUserInfo();
    let jId = userInfo.userJournalID;
    console.log(userInfo);

    this.apiService.ListEntries().then((list) => {
      list.items.forEach(entryItem => {
        let n = formatDate(entryItem.createdOn, 'MM / dd', 'en-US');
        entryItem.createdOn = n;
        console.log(entryItem);
      });
      this.items = list.items;
      console.log( "list entries response:");
      console.dir( list.items)
    });

    console.log('Loading Entries....');
  }

  getUserInfo() : User{
    let ui = this.authService.getUserInfo()
    this.user = ui;
    return this.user;
  }


}
