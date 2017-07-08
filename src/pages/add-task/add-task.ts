import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { Toast } from '@ionic-native/toast';

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
  task = { "name": '' }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiServiceProvider, public toastCtrl: ToastController) {
  }
  addTask() {
    this.restapiService.addTask(this.task).then((result) => {
      let toast = this.toastCtrl.create({
        message: `Task Added to your List!`,
        duration: 2000
      });
      toast.present();
    }, (err) => {
      console.log(err);
    });
  }
}
