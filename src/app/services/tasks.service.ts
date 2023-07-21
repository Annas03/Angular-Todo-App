import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public taskArray: task[] = [];

  constructor(private http: HttpClient) { }

  // private async setTask() {
  //   await this.http.get('https://dummyjson.com/todos')
  //     .subscribe({
  //       next: (res: any) => {
  //         console.log("in await")
  //         this.taskArray = res.todos
  //         return this.taskArray
  //       }
  //     })
  // }

  getTasks() {
    // if (this.taskArray.length == 0) {
    //   await this.setTask()
    //   return this.taskArray
    // }
    // return this.taskArray
    return this.http.get('https://dummyjson.com/todos')
  }

  addTask(value: any): task[] {
    this.taskArray.push({ ...value, id: this.taskArray.length + 1 })
    return this.taskArray
  }

  deleteTask(value: any) {
    this.taskArray = this.taskArray.filter((task: any) => task.id !== value)
  }

}
