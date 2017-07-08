import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, private restapiService: RestapiServiceProvider, public app: App) {
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
    this.restapiService.deleteTask(id);
    this.tasks.splice(index, 1);
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
