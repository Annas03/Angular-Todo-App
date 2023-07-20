import { Component } from '@angular/core';
import { task } from "./models/task"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  inputValid: boolean | undefined = true;

  fun(val: any) {
    console.log(val)
  }

  taskArray: task[] = [
    { id: 1, content: 'task One', isDone: false, date: "March 5th at 2:30pm" },
    { id: 2, content: 'task two', isDone: true, date: "March 6th at 10:50am" },
    { id: 3, content: 'task three', isDone: false, date: "March 9th at 4:10pm" }
  ]

  saveTaskInApp(value: any) {
    if (value.content !== '' && value.date !== '') {
      this.taskArray.push({ ...value, id: this.taskArray.length + 1 })
      this.inputValid = true
    }
    else {
      this.inputValid = false;
    }
  }

  deleteTaskInApp(value: any) {
    this.taskArray = this.taskArray.filter((task) => task.id !== value)
  }

}
