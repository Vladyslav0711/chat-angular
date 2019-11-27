import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../message.model';
import {ActivatedRoute} from '@angular/router';
import {Chat} from '../chat.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-direct-chat',
  templateUrl: './direct-chat.component.html',
  styleUrls: ['./direct-chat.component.scss']
})
export class DirectChatComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {
  }


  @Input() newMessage: string;
  @Output() send = new EventEmitter();
  @Input() messages: Message[];
  @Input() selectedChat: Chat;
  @Input() chats: Chat[];

  ngOnInit() {
    this.route.params.subscribe(val => console.log('ss'))
  }


  sendMessage(NewMessage: string) {
    this.send.emit(NewMessage);
  }

  // filterMessages() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.filteredMessages = this.messages.filter((m: Message) => m.to.id === id);
  // }
}
