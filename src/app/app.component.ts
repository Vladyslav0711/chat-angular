import {Component, OnInit} from '@angular/core';
import {Message} from './message.model';
import {Chat} from './chat.model';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Contact} from './contact.model';
import {ActivatedRoute, Params} from '@angular/router';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {

  }

  messages: Message[] = [];
  newMessage;
  activeChat$;


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
  selectedChat: Chat; //  = this.chats[1 + this.route.snapshot.paramMap.get('id')];

  ngOnInit(): void {
   // this.selectedChat = this.chats[0];
  }

  sendMessage(newMessage) {
    this.selectedChat.messageArr.push({
      text: newMessage,
      to: {name: this.selectedChat.text, id: this.selectedChat.id},
      from: 'you'
    } as Message);
    this.newMessage = ' ';
  }

  selectChat(chat: Chat) {
    this.selectedChat = chat;
    this.activeChat$ = this.route.params.pipe(
      map(() => this.selectedChat),
      tap(console.log)
    );
  }


}
