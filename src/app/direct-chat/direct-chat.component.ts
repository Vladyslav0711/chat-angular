import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'app-direct-chat',
  templateUrl: './direct-chat.component.html',
  styleUrls: ['./direct-chat.component.scss']
})
export class DirectChatComponent {

  @Input() newMessage: string;
  @Output() send = new EventEmitter();
  @Input() messages: Message[];

  sendMessage(NewMessage: string) {
    this.send.emit(NewMessage);
  }

}
