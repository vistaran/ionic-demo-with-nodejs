import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTaskPage } from './edit-task';

@NgModule({
  declarations: [
    EditTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTaskPage),
  ],
  exports: [
    EditTaskPage
  ]
})
export class EditTaskPageModule {}
