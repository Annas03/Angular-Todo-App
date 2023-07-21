import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { task } from 'src/app/models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output() saveTask1 = new EventEmitter();
  @Input() editTask: task | undefined;
  @Output() taskEdit = new EventEmitter();
  taskForm = new FormGroup({
    todoTask: new FormControl(),
    todoCompleted: new FormControl()
  })
  // todoTask: FormControl = new FormControl('');

  content: string = '';

  ngOnChanges() {  
    if (this.editTask) {
      this.taskForm.controls.todoTask.setValue(this.editTask?.todo)
    }
  }

  save(value: task) {
    this.taskForm.controls.todoTask.setValue('')
    this.saveTask1.emit(value)
    this.editTask = undefined
  }

  edit(value: any) {
    this.taskEdit.emit({...this.editTask, todo: value})
    this.taskForm.controls.todoTask.setValue('')
    // this.editTask = undefined
  }
}

