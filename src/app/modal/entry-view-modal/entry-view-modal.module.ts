import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryViewModalPageRoutingModule } from './entry-view-modal-routing.module';

import { EntryViewModalPage } from './entry-view-modal.page';
import { EntryContainerComponentModule } from 'src/app/entry-container/entry-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryViewModalPageRoutingModule,
    EntryContainerComponentModule
  ],
  declarations: [EntryViewModalPage]
})
export class EntryViewModalPageModule {}
