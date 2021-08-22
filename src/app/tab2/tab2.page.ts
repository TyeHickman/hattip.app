import { Component } from '@angular/core';
import { Entry } from '../entry-container/entry';
import { ToastController } from '@ionic/angular';
import { APIService } from '../API.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { EntryViewModalPage } from '../modal/entry-view-modal/entry-view-modal.page';
import { IonRouterOutlet } from '@ionic/angular';



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
    private routerOutlet: IonRouterOutlet
    ) {}
  title = "Reflect";
  items = [];
  errorMessage: string;
  EntryDetail : Entry;
  itemOpen = true;


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
        'name' : 'A prop'
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
    this.apiService.ListEntries().then((res) => {
      res.items.forEach(entryItem => {
        let n = formatDate(entryItem.createdOn, 'MM / dd', 'en-US');
        entryItem.createdOn = n;
        console.log(entryItem);
      });
      this.items = res.items;
      // console.log(res.items);
    });
    console.log('Loading Entries....');
  }


}
