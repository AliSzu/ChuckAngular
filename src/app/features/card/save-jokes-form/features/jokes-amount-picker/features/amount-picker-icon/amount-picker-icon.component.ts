import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amount-picker-icon',
  templateUrl: './amount-picker-icon.component.html',
  styleUrls: ['./amount-picker-icon.component.scss'],
})
export class AmountPickerIconComponent {
  @Input() public iconType = '';
}
