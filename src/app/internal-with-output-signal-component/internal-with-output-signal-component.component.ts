import { Component, output } from '@angular/core';

@Component({
  selector: 'app-internal-with-output-signal-component',
  imports: [],
  templateUrl: './internal-with-output-signal-component.component.html',
  styleUrl: './internal-with-output-signal-component.component.scss'
})
export class InternalWithOutputSignalComponentComponent {
  public valueChange = output<string>();
  public customEvent = output<number>();

  public emitValue(value: string): void {
    this.valueChange.emit(value);
  }

  public emitCustomEvent(num: number): void {
    this.customEvent.emit(num);
  }
}
