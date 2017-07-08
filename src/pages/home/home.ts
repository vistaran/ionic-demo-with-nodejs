import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { AddTaskPage } from "../add-task/add-task";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks = [];
  addTaskPage = AddTaskPage;
  constructor(public navCtrl: NavController, public RestapiService: RestapiServiceProvider, public app: App) {
    this.getTasks()
  }
  getTasks() {
    this.RestapiService.getTasks().then(data => {
      this.tasks = data;
    })
  }
  doRefresh(refresher) {
    this.RestapiService.getTasks().then(data => {
      this.tasks = this.tasks.concat(data);
    })
    setTimeout(() => {
      // this.RestapiService.getTasks().then(data => {
      //   this.tasks = this.tasks.concat(data);
      // })
      refresher.complete();
    }, 2000);
  }
  ionViewDidLoad() {
  }

}
