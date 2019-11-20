import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() selectedChat: string;
  @Input() chats: string[];
  @Output() selectCh = new EventEmitter();
  @Output() isSelect = new EventEmitter();

  isSelected(chat: string): boolean {
    return chat === this.selectedChat;
  }

  selectChat(chat: string) {
    this.selectCh.emit(chat);
  }
}
