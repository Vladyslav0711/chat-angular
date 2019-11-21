import {Contact} from './contact.model';

export interface Message {
  text: string;
  to: Contact;
  from: string;
}
