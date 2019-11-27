import { Injectable } from '@angular/core';
import { Chat } from '../chat.model';
import { Message } from '../message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  
  messages: Message[] = [];
  newMessage;
  activeChat$;
  currentId: number;

  chats: Chat[] = [
    {
      id: 1,
      text: 'echo',
      messageArr: []
    },
    {
      id: 2,
      text: 'joffrey',
      messageArr: []
    },
    {
      id: 3,
      text: 'imp',
      messageArr: []
    },
    {
      id: 4,
      text: 'weather',
      messageArr: []
    }
  ];

  getChats(): Chat[]{
    return this.chats;
  }
  
}
