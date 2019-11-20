import {Component} from '@angular/core';
import {Message} from './message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: Message[] = [];
  newMessage;
  selectedChat: string;
  filteredMessages: Message[] = [];
  chats: string[] = [
    'dany',
    'joffrey',
    'imp',
    'weather'
  ];

  sendMessage(newMessage) {
    this.messages.push({text: newMessage, to: this.selectedChat} as Message);
    this.newMessage = ' ';
    this.filterMessages(this.selectedChat);

  }

  selectChat(chat: string) {
    this.selectedChat = chat;
    this.filterMessages(chat);
  }

  filterMessages(selectedChat) {
    this.filteredMessages =  this.messages.filter((m: Message) => m.to === selectedChat);
  }
}
