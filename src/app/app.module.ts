import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { InputFormComponent } from './direct-chat/input-form/input-form.component';
import { ChatHistoryComponent } from './direct-chat/chat-history/chat-history.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DirectChatComponent } from './direct-chat/direct-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ChatHistoryComponent,
    ContactListComponent,
    DirectChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
