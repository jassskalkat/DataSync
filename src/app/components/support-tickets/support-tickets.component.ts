import {Component} from '@angular/core';
import {NewTicketComponent} from './new-ticket/new-ticket.component';
import {Ticket} from '../../models/ticket';

@Component({
  selector: 'app-support-tickets',
  imports: [
    NewTicketComponent
  ],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.scss'
})
export class SupportTicketsComponent {
  receiveNewTicketInformation(ticket: Ticket) {
    console.log("Received new ticket information: ", ticket);
  }
}

