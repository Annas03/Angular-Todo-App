import { Component, Input } from '@angular/core';
import { task } from 'src/app/models/task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  content: string = ''
  @Input() Task: task | undefined;

  constructor(){}

  ngOnInit(){
    console.log(this.Task)
  }

}
