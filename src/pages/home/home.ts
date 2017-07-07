import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: any;
  constructor(public navCtrl: NavController, public RestapiService: RestapiServiceProvider) {
    this.getTasks();
  }
  getTasks() {
    this.RestapiService.getTasks().then(data => {
      this.tasks = data;
    })
  }

}
