import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent{
  @Output() public onNameChange = new EventEmitter<string>();

  public customName = ''
  public buttonName = 'Chuck Norris'

  public onSubmit(): void {
    this.onNameChange.emit(this.customName)
  }

  public onChange(): void {
    this.buttonName = this.customName ? this.customName : 'Chuck Norris'
  }
}
