import { Component, model } from '@angular/core';

@Component({
  selector: 'app-internal-with-model-input-component',
  imports: [],
  templateUrl: './internal-with-model-input-component.component.html',
  styleUrl: './internal-with-model-input-component.component.scss'
})
export class InternalWithModelInputComponentComponent {
  public value = model<string>();

  public changeValue(value: string): void {
    this.value.set(value);
  }
}
