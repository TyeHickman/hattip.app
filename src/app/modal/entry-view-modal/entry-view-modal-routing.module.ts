import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryViewModalPage } from './entry-view-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EntryViewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryViewModalPageRoutingModule {}
