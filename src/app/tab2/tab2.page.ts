import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
// import { GroceriesService } from '../groceries.service';
// import { InputDialogService } from '../input-dialog.service';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  title = "Reflect";

  items: [
    {
      date: "today's date",
      title: "My Title!!!"
    }
  ];


  
}
