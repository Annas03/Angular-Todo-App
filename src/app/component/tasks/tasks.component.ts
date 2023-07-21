import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() taskArray1: any;
  @Output() deleteTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @Output() toggleCompletionOfTask = new EventEmitter();

  delete(value: any){
    this.deleteTask.emit(value)
  }
  edit(value: any){
    this.editTask.emit(value)
  }
  toggleCompletion(value: any){
    this.toggleCompletionOfTask.emit(value)
  }
}
