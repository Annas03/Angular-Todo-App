import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from 'src/app/models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output() saveTask1 = new EventEmitter();

  content: string = '';
  day: string = '';
  completed: boolean = false;

  save(value: task) {
    this.content = ''
    this.day = ''
    this.completed = false
    this.saveTask1.emit(value)
  }
}
