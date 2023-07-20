import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public taskArray: task[] = [];

  constructor(private http: HttpClient) { }

  private setTask() {
    this.http.get('https://dummyjson.com/todos').subscribe({
      next: (res: any) => {
        this.taskArray = res.todos
      }
    })
  }

  getTasks() {
    if (this.taskArray.length == 0){
      this.setTask()
    }
    return this.taskArray
  }

  addTask(value: any) {
    this.taskArray.push({ ...value, id: this.taskArray.length + 1 })
  }

  deleteTask(value: any) {
    this.taskArray = this.taskArray.filter((task: any) => task.id !== value)
  }

}
