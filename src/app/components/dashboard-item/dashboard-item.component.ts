import {Component, input} from '@angular/core';
import {Image} from '../../models/image.interface';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent {
  image = input.required<Image>();
  title = input.required<string>();
}
