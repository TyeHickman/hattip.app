import { Component, Input } from '@angular/core';
import {Validators, FormBuilder, FormGroup, NgForm} from '@angular/forms';



@Component({
  selector: 'app-entry-container',
  templateUrl: './entry-container.component.html',
  styleUrls: ['./entry-container.component.scss'],
})
export class EntryContainerComponent {
  @Input() name: string;
  @Input() user: string;
  @Input() entryDate: Date;
  @Input() prompt: string;
  @Input() streak: number;

  entryForm: FormGroup;

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
      type: "button"
    }
  ]

  constructor(public formBuilder: FormBuilder) {
    this.entryForm = this.formBuilder.group({
      entryTitle: ['', Validators.required],
      entryBody: ['', Validators.required],
    });
    console.dir(this.entryForm.value);
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

  async saveEntry() {
    console.log('Saving Entry...');
    
  }

  clearEntry() {
    console.log('Clear Entry...');
  }

  shareEntry() {
    console.log('Sharing Entry...');
  }

  //returns fab buttons based on 'isActive' property
  getActiveFabs() {
    return this.fabButtons.filter((i: any) => {
      return i.isActive === true;
    });
  }

  submitEntryForm(entryForm : NgForm) {
    console.log('Submit Form...');
    console.dir(this.entryForm);
    console.log(entryForm.value);
    console.log(entryForm.valid);
  }

}
