import { Component } from '@angular/core';
import { App, NavController, AlertController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { AddTaskPage } from "../add-task/add-task";
import { EditTaskPage } from "../edit-task/edit-task";
import { Task } from '../../models/Task';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  tasks: Task[];
  task: {}
  addTaskPage = AddTaskPage;
  constructor(public navCtrl: NavController, private restapiService: RestapiServiceProvider, public app: App, private alertCtrl: AlertController) {
    this.getTasks();
  }

  getTasks() {
    this.restapiService.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  editTask(id) {
    this.restapiService.getTask(id).subscribe(res => {
      this.task = res;
      this.navCtrl.push('EditTaskPage', this.task);
    });
  }

  deleteTask(index, id) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.restapiService.deleteTask(id);
            this.tasks.splice(index, 1);
          }
        }
      ]
    });
    alert.present();
  }

  doRefresh(refresher) {
    this.restapiService.getTasks().subscribe(res => {
      this.tasks = res;
    });
    console.log(this.tasks);
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
}
