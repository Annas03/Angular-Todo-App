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

  // taskArray: any[] = [
  //   { id: 1, content: 'task One', isDone: false, date: "March 5th at 2:30pm" },
  //   { id: 2, content: 'task two', isDone: true, date: "March 6th at 10:50am" },
  //   { id: 3, content: 'task three', isDone: false, date: "March 9th at 4:10pm" }
  // ]

  taskArray: task[] = [];

  constructor(private service: TasksService) { }

  fun(val: any) {
    console.log(val)
  }

  ngOnInit() {     
    this.taskArray = this.service.getTasks()
  }

  saveTaskInApp(value: any) {
    // if (value.content !== '' && value.date !== '') {
    //   service
    //   this.inputValid = true
    // }
    // else {
    //   this.inputValid = false;
    // }
  }

  deleteTaskInApp(value: any) {
    this.taskArray = this.taskArray.filter((task: any) => task.id !== value)
  }

}
