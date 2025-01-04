import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ticket} from '../../../models/ticket';
import {ButtonComponent} from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  imports: [
    FormsModule,
    ButtonComponent
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss'
})
export class NewTicketComponent {
  @Output() newTicket = new EventEmitter<Ticket>();
  public ticket: Ticket;

  constructor() {
    this.ticket = new Ticket();

  }

  sendNewTicketInformation() {
    this.newTicket.emit(this.ticket);
  }
}
