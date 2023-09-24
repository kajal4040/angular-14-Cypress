import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss']
})
export class DumbComponent {
  @Input() dumbData: any; // Define an input property to receive data
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}
  onButtonClick() {
    alert('button clicked');
  }
  sendMessage(){
    this.messageEvent.emit('hellow from child');
  }
}
