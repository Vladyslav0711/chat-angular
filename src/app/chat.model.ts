import {Observable, ReplaySubject, Subject} from 'rxjs';
import {Message} from './message.model';

export interface Chat {
  id: number;
  text: string;
  messageArr: Message[];
}
