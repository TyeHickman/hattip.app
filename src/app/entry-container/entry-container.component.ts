import { Component, Input } from '@angular/core';
import {Validators, FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Entry } from './entry';
import { APIService } from '../API.service';
import { AuthService } from '../auth/auth.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { Auth } from 'aws-amplify'
import { JournalService } from '../journal.service';
import { AWSAppSyncProvider } from '@aws-amplify/pubsub';
import { User } from '../auth/user';
import { Journal } from '../journal';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-entry-container',
  templateUrl: './entry-container.component.html',
  styleUrls: ['./entry-container.component.scss'],
})
export class EntryContainerComponent{
  @Input() name: string;
  @Input() user?: string;
  @Input() entryDate: string;
  @Input() pastPrompt?: string;
  @Input() entryBody?: string;
  @Input() streakAtCreation?: number;
  @Input() entryTitle?: string;

  entryForm: FormGroup;

  entry: Entry;
  userInfo : User;
  username : string;
  journalId: string;
  journal : Journal;
  prompt : string;
  streak : number;


  fabButtons = [{
      iconName: "checkmark-circle-outline",
      color: "success",
      isActive: false,
      // action: this.saveEntry,
      type: "submit",
      side: "top"
    },
    {
      iconName: "arrow-undo-circle-outline",
      color: "danger",
      isActive: false,
      // action: this.clearEntry,
      type: "reset",
      side: "start"
    },
    {
      iconName: "share-outline",
      color: "success",
      isActive: false,
      // action: this.shareEntry,
      type: "button",
      sie: "top"
    }
  ]

  constructor(
    public formBuilder: FormBuilder, 
    public apiService: APIService, 
    // public navExtra: NavigationExtras, 
    public router: Router,
    private  authService:  AuthService,
    public journalService: JournalService,
    public modalController: ModalController
    // private route: ActivatedRoute
    ) {
    this.entryForm = this.formBuilder.group({
      entryTitle: ['', Validators.required],
      entryBody: ['', Validators.required],
    });
    console.dir(this.entryForm.value);

    // console.dir(this.entry);
    
    this.userInfo = this.getUserInfo();
    // this.userSub = this.getUserInfo();
    this.username = this.userInfo.username;

    this.journal = this.getJournalInfo(this.userInfo);
    
    // this.prompt = this.journal.prompt;

    // this.entry = {
    //   //TODO: get this from auth process...
    //   journalId : this.journal.id,
    //   prompt : this.journal.prompt,
    //   createdOn : '',
    //   entryTitle : '',
    //   entryBody : '',
    //   streakAtCreation : this.journal.currentStreak
    // };

  }

  ngOnInit() {

    // when view initializes, reads 'name' and sets buttons accordingly
    if (this.name === 'Daily Entry') {
      //activate btns
      this.fabButtons[0].isActive = true;
      this.fabButtons[1].isActive = true;
      this.fabButtons[2].isActive = false;

    } else {
      this.fabButtons[0].isActive = false;
      this.fabButtons[1].isActive = false;
      this.fabButtons[2].isActive = true;
    }
  }

  // clearEntryForm() {
  //   console.log('Clear Entry...');
  //   document.getElementById("entryForm").reset();
  // }

  shareEntry() {
    console.log('Sharing Entry...');
  }

  //returns fab buttons based on 'isActive' property
  getActiveFabs() {
    return this.fabButtons.filter((i: any) => {
      return i.isActive === true;
    });
  }

  submitEntryForm(entryForm : NgForm ) {
    console.log('Submit Form...');
    console.dir(this.entryForm);
    console.log(entryForm.value);
    console.log(entryForm.valid);
    //Now we have the entry title and body..
    //combine those with the inputs from the tab to creat and Entry object
    this.buildEtnryItem(entryForm);
    entryForm.reset();
  }

  buildEtnryItem( entryForm : NgForm ){
    console.log('Building Entry...');
    console.log(entryForm.value)
    this.entry = {
      journalId: this.journalId,
      prompt: this.journal.prompt,
      entryTitle: entryForm.value.entryTitle,
      entryBody: entryForm.value.entryBody,
      createdOn: new Date().toISOString(),
      streakAtCreation: this.streak
    }

    console.log(this.entry)
    this.apiService.CreateEntry(this.entry);

    //go to journal view
    this.goToJournal();

    
  }

  goToJournal() {
    this.router.navigate(['tabs/tab2']);
  }

  getUserInfo() : User {
    let ui = this.authService.getUserInfo()
    console.log(ui);
    return ui;
  }

  getJournalInfo(user: User) : Journal {
    let sub = user.usersub;
    let journ : Journal
    let j = this.journalService.getJournal(sub).then((journalInfo) => {
      console.log(journalInfo);
      this.journal = {
        id : journalInfo.id,
        name : journalInfo.name,
        prompt : journalInfo.prompt,
        currentStreak : journalInfo.currentStreak
      }
      this.prompt = journalInfo.prompt;
      this.streak = journalInfo.currentStreak;
      this.journalId = journalInfo.id;
      return this.journal
    });
    console.log(j);
    return journ;
  }

  closeModal(){
    this.modalController.dismiss({'dismissed' : true});
  }

}
