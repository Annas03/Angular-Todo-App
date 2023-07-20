import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() arg: string | undefined;
  @Output() clickCross= new EventEmitter()

  constructor() {
    
  }


  abc() {
    this.clickCross.emit('true')
  }
}
