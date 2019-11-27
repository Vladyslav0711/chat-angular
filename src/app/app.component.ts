import {Component, OnInit} from '@angular/core';
import {Message} from './message.model';
import {Chat} from './chat.model';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {map, tap, switchMap} from 'rxjs/operators';
import {Contact} from './contact.model';
import {ActivatedRoute, Params} from '@angular/router';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


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
  selectedChat: Chat = this.chats[0]; 

  ngOnInit(): void { }

  sendMessage(newMessage) {
    this.selectedChat.messageArr.push({
      text: newMessage,
      to: {name: this.selectedChat.text, id: this.selectedChat.id},
      from: 'you'
    } as Message);
    this.newMessage = ' ';
  }




}
