import { Component, Input } from '@angular/core';
import {Validators, FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Entry } from './entry';
import { APIService } from '../API.service';



@Component({
  selector: 'app-entry-container',
  templateUrl: './entry-container.component.html',
  styleUrls: ['./entry-container.component.scss'],
})
export class EntryContainerComponent{
  @Input() name: string;
  @Input() user: string;
  @Input() entryDate: string;
  @Input() prompt: string;
  @Input() streak: number;

  entryForm: FormGroup;

  entry: Entry;

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
    // private route: ActivatedRoute
    ) {
    this.entryForm = this.formBuilder.group({
      entryTitle: ['', Validators.required],
      entryBody: ['', Validators.required],
    });

    this.entry = {
      journalId : '1ca040ee-8d00-4c94-958c-0320a361a964',
      prompt : '',
      createdOn : '',
      entryTitle : '',
      entryBody : '',
      streakAtCreation : 0
    };
    console.dir(this.entryForm.value);

    console.dir(this.entry);
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

    
    //TODO: Get our journal ID from the user...]
    this.entry.streakAtCreation = this.streak;
    this.entry.prompt = this.prompt;
    this.entry.entryTitle = entryForm.value.entryTitle;
    this.entry.entryBody = entryForm.value.entryBody;
    this.entry.createdOn = this.entryDate;
    console.dir(entryForm)
    console.dir(this.entry);

    // this.apiService.CreateEntry(this.entry);

    //go to journal view
    this.goToJournal();

    
  }

  goToJournal() {
    this.router.navigate(['tabs/tab2']);
  }

}
