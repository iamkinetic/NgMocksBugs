import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-internal-with-classic-input-component',
  imports: [],
  templateUrl: './internal-with-classic-input-component.component.html',
  styleUrl: './internal-with-classic-input-component.component.scss'
})
export class InternalWithClassicInputComponentComponent {
  @Input() public value: string = '';
  @Output() public valueChange = new EventEmitter<string>();

  public changeValue(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}
