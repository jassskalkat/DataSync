import {Component} from '@angular/core';
import {TRAFFIC_DATA} from "../../models/traffic-data";
import {Traffic} from '../../models/traffic.interface';

@Component({
  selector: 'app-server-traffic',
  imports: [],
  templateUrl: './server-traffic.component.html',
  styleUrl: './server-traffic.component.scss'
})
export class ServerTrafficComponent {
  protected readonly trafficData: Traffic[] = TRAFFIC_DATA;
  maxTraffic: number = Math.max(...this.trafficData.map((data: Traffic): number => data.value));
}
