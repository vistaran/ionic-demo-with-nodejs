import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import {  } from "../home/";
/**
 * Generated class for the AddTaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiServiceProvider) {
  }
  task = { name: '', status: '' };

  addTask() {
    this.restapiService.addTask(this.task).then((result) => {
      this.navCtrl.push(YourPage)
    }, (err) => {
      console.log(err);
    });
  }

}
