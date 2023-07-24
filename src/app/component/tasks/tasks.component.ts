import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  taskArray1: any;
  @Output() deleteTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @Output() toggleCompletionOfTask = new EventEmitter();

  constructor(private service: TasksService) {
    this.service.bSubject.subscribe((res) => {
      console.log(res)
      this.taskArray1 = res
    })
  }

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
