import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-internal-with-signal-input-component',
  imports: [],
  templateUrl: './internal-with-signal-input-component.component.html',
  styleUrl: './internal-with-signal-input-component.component.scss'
})
export class InternalWithSignalInputComponentComponent {
  public value = input<string>();
  public valueChange = output<string>();

  public changeValue(value: string): void {
    this.valueChange.emit(value);
  }
}


