import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestapiServiceProvider } from "../../providers/restapi-service/restapi-service";
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the EditTaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {
  task: {};
  id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private restapiService: RestapiServiceProvider, public toastCtrl: ToastController) {
    this.task = this.navParams.data;
  }
  editTask(task) {
    this.restapiService.editTask(task._id, this.task).subscribe((res) => {
      this.navCtrl.pop();
      console.log(this.task);
      let toast = this.toastCtrl.create({
        message: `Task Edited Successfully!`,
        duration: 2000
      });
      toast.present();
    }, (err) => {
      console.log(err);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTaskPage');
  }

}
