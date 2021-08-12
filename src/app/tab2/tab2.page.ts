import { Component } from '@angular/core';
import { Entry } from '../entry-container/entry';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  title = "Reflect";
  items = [];

  loadItems() {
    // this.dataService.getItems()
    //   .subscribe(
    //     items => this.items = items,
    //     error => this.errorMessage = <any>error
    //   );
    console.log("loading items...")
  }
  //TODO: define some methods...
  editItem(item, index){
    console.dir(item);
  }


}
