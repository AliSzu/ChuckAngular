import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  @Output() onNameChange = new EventEmitter<string>();

  customName = ''

  onSubmit(): void {
    this.onNameChange.emit(this.customName)
  }
}
