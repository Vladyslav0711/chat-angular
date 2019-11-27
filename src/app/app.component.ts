import {Component, OnInit} from '@angular/core';
import {Message} from './message.model';
import {Chat} from './chat.model';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {map, tap, switchMap} from 'rxjs/operators';
import {Contact} from './contact.model';
import {ActivatedRoute, Params} from '@angular/router';
import {async} from '@angular/core/testing';
import { ChatServiceService } from './services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  chats: Chat[]
  constructor(chatServ:ChatServiceService){
      this.chats = chatServ.getChats();
  }

  ngOnInit(): void { }
}
