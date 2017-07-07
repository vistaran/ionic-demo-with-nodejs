import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectexport class RestapiServiceProvider {
  data: any;

  constructor(public http: Http) {
  }
  base = 'http://ionicpoc-env.us-east-1.elasticbeanstalk.com/';

  getTasks() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.base + '/tasks')
        .map(res => res.json())

    });
  }

  addTask(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.base + '/tasks', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
