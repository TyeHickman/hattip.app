import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryContainerComponent } from './entry-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [EntryContainerComponent],
  exports: [EntryContainerComponent]
})
export class EntryContainerComponentModule {}
