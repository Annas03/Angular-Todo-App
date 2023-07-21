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
    if (value.content !== '' && value.date !== '') {
      this.taskArray = this.service.addTask(value)
      this.inputValid = true
    }
    else {
      this.inputValid = false;
    }
  }

  deleteTaskInApp(value: any) {
    this.taskArray = this.taskArray.filter((task: any) => task.id !== value)
  }

}
