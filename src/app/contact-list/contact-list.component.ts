import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chat} from '../chat.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() selectedChat: Chat;
  @Input() chats: Chat[];
  @Output() selectCh = new EventEmitter();
  @Output() isSelect = new EventEmitter();

  isSelected(chat: Chat): boolean {
    return chat === this.selectedChat;
  }

  selectChat(chat: Chat) {
    this.selectCh.emit(chat);
  }
}
