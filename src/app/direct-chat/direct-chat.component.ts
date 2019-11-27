import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../message.model';
import {ActivatedRoute} from '@angular/router';
import {Chat} from '../chat.model';
import { tap } from 'rxjs/operators';
import { ChatServiceService } from '../services/chat-service.service';

@Component({
  selector: 'app-direct-chat',
  templateUrl: './direct-chat.component.html',
  styleUrls: ['./direct-chat.component.scss']
})
export class DirectChatComponent {
  constructor(
    private route: ActivatedRoute,
    chatServ: ChatServiceService
  ) {
    this.route.params.subscribe((param) => {
      this.selectedChat = chatServ.getChats().find((chat)=>chat.text===param.recipient);
    })
  }
  selectedChat: Chat;
  newMessage: string;

  sendMessage(newMessage) {
    this.selectedChat.messageArr.push({
      text: newMessage,
      to: {name: this.selectedChat.text, id: this.selectedChat.id},
      from: 'you'
    } as Message);
    this.newMessage = ' ';
  }



  // sendMessage(NewMessage: string) {
  //   this.send.emit(NewMessage);
  // }

  // filterMessages() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.filteredMessages = this.messages.filter((m: Message) => m.to.id === id);
  // }
}
