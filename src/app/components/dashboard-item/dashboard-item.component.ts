import {Component, input} from '@angular/core';

interface image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent {
  image = input.required<image>();
  title = input.required<string>();
}
