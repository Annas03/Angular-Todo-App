import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { task } from '../models/task';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public taskArray: task[] = [];
  public completeTasks: task[] = [];
  public pendingTasks: task[] = [];

  bSubject = new BehaviorSubject<task []>(this.taskArray);
  completeTaskSubject = new BehaviorSubject<task []>([])
  pendingTaskSubject = new BehaviorSubject<task []>([])


  constructor(private http: HttpClient) { }

  public callTasks(): Observable<any> {
    return this.http.get('https://dummyjson.com/todos').pipe(map((res: any) => {
      this.taskArray = res.todos
      this.bSubject.next(res.todos)
      this.sortArrays();
      return this.taskArray;
    }))
  }

  public sortArrays(){
    for(let i=0; i<this.taskArray.length; i++){
      if(this.taskArray[i].completed){
        this.completeTasks.push(this.taskArray[i])
      }
      else{
        this.pendingTasks.push(this.taskArray[i])
      }
    }
    console.log(this.completeTasks)
    this.completeTaskSubject.next(this.completeTasks)
    console.log(this.pendingTasks)
    this.pendingTaskSubject.next(this.pendingTasks)
  }

  async getTasks() {
    return this.callTasks()
  }

  editTask(value: any) {
    for (let i = 0; i < this.taskArray.length; i++) {
      if (this.taskArray[i].id === value.id) {
        this.taskArray[i].todo = value.todo
        this.taskArray[i].completed = value.completed
      }
    }
    this.bSubject.next(this.taskArray);
  }

  addTask(value: any) {
    this.pendingTasks = [{ ...value, id: this.taskArray.length + 1 }, ...this.pendingTasks]
    // this.bSubject.next(this.taskArray);
    this.pendingTaskSubject.next(this.pendingTasks)
  }

  deleteTask(value: any) {
    this.taskArray = this.taskArray.filter((task: any) => task.id !== value)
    this.bSubject.next(this.taskArray);
  }

  toggleCompletion(value: any){
    if(value.completed){
      value = {...value, completed: false}
      this.completeTasks = this.completeTasks.filter((task) => task.id !== value.id)
      this.pendingTasks = [value, ...this.pendingTasks]
    }
    else{
      value = {...value, completed: true}
      this.pendingTasks = this.pendingTasks.filter((task) => task.id !== value.id)
      this.completeTasks = [value, ...this.completeTasks]
    }
    this.completeTaskSubject.next(this.completeTasks)
    this.pendingTaskSubject.next(this.pendingTasks)

  }

}
