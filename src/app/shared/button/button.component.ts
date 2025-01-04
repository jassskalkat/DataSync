import {Component, input} from '@angular/core';

@Component({
  selector: 'button[app-button]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  button = input.required<string>();
  icon = input.required<string>();
}
