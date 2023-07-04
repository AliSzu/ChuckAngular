import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent{
  @Output() public onNameSubmit = new EventEmitter<string>();
  @Output() public onNameChange = new EventEmitter<string>();

  public customName = ''
  public buttonName = 'Chuck Norris'

  public onSubmit(): void {
    this.onNameSubmit.emit(this.customName)
  }

  public onChange(): void {
    this.buttonName = this.customName ? this.customName : 'Chuck Norris'
    this.onNameChange.emit(this.customName)
  }
}
