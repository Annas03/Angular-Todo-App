import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public taskArray: task[] = [];

  constructor(private http: HttpClient) { }

  // private setTask() {
  //   return this.http.get('https://dummyjson.com/todos')
  //   .subscribe({
  //     next: (res: any) => {
  //       this.taskArray = res.todos
  //     }
  //   })
  // }

  getTasks() {
    // if (this.taskArray.length == 0){
    //   this.setTask().subscribe({
    //     next: (data: any) => {
    //       this.taskArray = data.todos
    //     }
    //   })
    // }
    // return this.taskArray
    return this.http.get('https://dummyjson.com/todos')
  }

  addTask(value: any) : task[] {
    this.taskArray.push({ ...value, id: this.taskArray.length + 1 })
    return this.taskArray
  }

  deleteTask(value: any) {
    this.taskArray = this.taskArray.filter((task: any) => task.id !== value)
  }

}
