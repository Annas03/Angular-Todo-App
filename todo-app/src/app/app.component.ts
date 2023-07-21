import { Component } from '@angular/core';
import { task } from "./models/task"
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  inputValid: boolean | undefined = true;
  editTask: task | undefined;

  taskArray: task[] = [];

  constructor(private service: TasksService) { }

  fun(val: any) {
    console.log(val)
  }

  ngOnInit() {     
    this.service.getTasks().subscribe({
      next: (data: any) => {
        this.taskArray = data.todos
      }
    })
  }

  saveTaskInApp(value: any) {
    if (value.todo !== '') {
      // this.taskArray = this.service.addTask(value)
      this.taskArray.push({ ...value, id: this.taskArray.length + 1 })
      this.inputValid = true
    }
    else {
      this.inputValid = false;
    }
  }

  editTaskInApp(value: any){
    this.editTask = value
  }

  deleteTaskInApp(value: any) {
    this.taskArray = this.taskArray.filter((task: any) => task.id !== value)
  }

  toggleCompletionInApp(value: any){
    for(let i=0; i<this.taskArray.length; i++){
      if(this.taskArray[i].id === value){
        this.taskArray[i].completed = !this.taskArray[i].completed
      }
    }
  }

}
