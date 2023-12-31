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

  constructor(private service: TasksService) {}

  fun(val: any) {
    console.log(val)
  }

  ngOnInit() {
    this.getData()
  }

  async getData() {
    (await this.service.getTasks()).subscribe((res) => {
      this.taskArray = res
    })
  }

  saveTaskInApp(value: any) {
    console.log(value.todo)
    if (value.todo !== null && value.todo !== '') {
      this.service.addTask(value)
      this.inputValid = true
    }
    else {
      this.inputValid = false;
    }
  }

  editTaskInApp(value: any) {
    this.editTask = value
  }

  editTaskTodoInApp(value: any) {
    console.log(value)
    if (value.todo !== '') {
      this.service.editTask(value);
      this.editTask = undefined
      this.inputValid = true;
    }
    else {
      this.inputValid = false;
    }
  }

  deleteTaskInApp(value: any) {
    console.log(value)
    this.service.deleteTask(value)
    this.inputValid = true;
    this.editTask = undefined
  }

  toggleCompletionInApp(value: any) {
    this.service.toggleCompletion(value)
  }

}
