import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DirectChatComponent} from './direct-chat/direct-chat.component';

const routes: Routes = [
  {path: 'chats/:recipient', component: DirectChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
