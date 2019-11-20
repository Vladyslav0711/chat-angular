import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  @Input() newMessage: string;
  @Output() send = new EventEmitter();

  sendMessage(NewMessage: string) {
    this.send.emit(NewMessage);
    this.newMessage = ' ';
  }

}
