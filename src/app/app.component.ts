import {Component} from '@angular/core';
import {Traffic} from './models/traffic.interface';
import {TRAFFIC_DATA} from './models/traffic-data';
import {HeaderComponent} from './components/header/header.component';
import {ServerStatusComponent} from './components/server-status/server-status.component';
import {ServerTrafficComponent} from './components/server-traffic/server-traffic.component';
import {SupportTicketsComponent} from './components/support-tickets/support-tickets.component';
import {DashboardItemComponent} from './components/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    ServerTrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  trafficData: Traffic[] = TRAFFIC_DATA;
  maxTraffic = Math.max(...this.trafficData.map((data: Traffic): number => data.value));
  currentStatus = 'online';
}
