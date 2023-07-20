import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() taskArray1: any;
  @Output() deleteTask = new EventEmitter();

  delete(value: any){
    this.deleteTask.emit(value)
  }

}
