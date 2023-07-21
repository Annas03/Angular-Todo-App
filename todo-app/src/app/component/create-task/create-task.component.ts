import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { task } from 'src/app/models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output() saveTask1 = new EventEmitter();
  @Input() editTask : task | undefined;
  todoTask: FormControl = new FormControl('');

  ngOnChanges() {
    console.log(this.editTask)
  }

  content: string = '';

  save(value: task) {
    this.content = ''
    this.saveTask1.emit(value)
  }
}
