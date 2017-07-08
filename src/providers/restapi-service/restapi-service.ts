import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Task } from '../../models/Task';

@Injectable()
export class RestapiServiceProvider {
  data: any;

  constructor(public http: Http) {
  }
  base = 'http://ionicpoc-env.us-east-1.elasticbeanstalk.com';

  getTasks(): Observable<Task[]> {
    return this.http.get(this.base + '/tasks')
      .map(res => <Task[]>res.json());
  }

  getTask(id): Observable<Task[]> {
    return this.http.get(this.base + '/tasks/' + id)
      .map(res => <Task[]>res.json());
  }

  editTask(id, task): Observable<Task[]> {
    return this.http.put(this.base + "/tasks/" + id, task)
      .map(res => <Task[]>res.json());
  }

  deleteTask(id) {
    this.http.delete(this.base + '/tasks/' + id)
      .subscribe(res => {
      }, (err) => {
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
