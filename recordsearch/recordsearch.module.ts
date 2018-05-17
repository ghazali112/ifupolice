import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordsearchPage } from './recordsearch';

@NgModule({
  declarations: [
    RecordsearchPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordsearchPage),
  ],
})
export class RecordsearchPageModule {}
