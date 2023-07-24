import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { task } from '../models/task';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public taskArray: task[] = [];
  bSubject = new BehaviorSubject<task []>(this.taskArray);

  constructor(private http: HttpClient) { }

  public callTasks(): Observable<any> {
    return this.http.get('https://dummyjson.com/todos').pipe(map((res: any) => {
      console.log(res.todos);
      this.taskArray = res.todos
      this.bSubject.next(this.taskArray)
      return this.taskArray;
    }))
  }

  async getTasks() {
    return this.callTasks()
  }

  editTask(value: any): task[] {
    for (let i = 0; i < this.taskArray.length; i++) {
      if (this.taskArray[i].id === value.id) {
        this.taskArray[i].todo = value.todo
        this.taskArray[i].completed = value.completed
      }
    }
    return this.taskArray
  }

  addTask(value: any): task[] {
    this.taskArray.push({ ...value, id: this.taskArray.length + 1 })
    return this.taskArray
  }

  deleteTask(value: any) : task[] {
    this.taskArray = this.taskArray.filter((task: any) => task.id !== value)
    return this.taskArray
  }

  toggleCompletion(value: any) : task[]{
    for (let i = 0; i < this.taskArray.length; i++) {
      if (this.taskArray[i].id === value) {
        this.taskArray[i].completed = !this.taskArray[i].completed
      }
    }
    return this.taskArray
  }

}
