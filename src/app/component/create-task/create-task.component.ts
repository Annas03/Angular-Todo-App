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
    todo: new FormControl(),
    completed: new FormControl()
  })

  content: string = '';

  ngOnChanges() {
    if (this.editTask) {
      this.taskForm.patchValue(this.editTask)
    }
  }

  save(value: task) {
    this.saveTask1.emit(value)
    this.taskForm.patchValue({ todo: '', completed: false })
    this.editTask = undefined
  }

  edit(value: any) {
    console.log(value)
    this.taskEdit.emit({ ...this.editTask, todo: value[0], completed: value[1] })
    this.taskForm.patchValue({ todo: '', completed: this.editTask?.completed })
    // this.editTask = undefined  
  }
}

