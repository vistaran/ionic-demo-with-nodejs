import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { AddTaskPage } from "../add-task/add-task";
import { Task } from '../../models/Task';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  tasks: Task[]
  addTaskPage = AddTaskPage;
  constructor(public navCtrl: NavController, private restapiService: RestapiServiceProvider, public app: App) {
    this.getTasks();
  }
  getTasks() {
    this.restapiService.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }
  deleteTask(id) {
    this.restapiService.deleteTask(id);
    this.tasks.splice(this.tasks.indexOf(id), 1);
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
