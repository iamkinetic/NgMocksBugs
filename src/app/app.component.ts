import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentWithClassicInputComponent, TestComponentWithModelSignalComponent, TestComponentWithSignalInputComponent } from '@cauca-911/material'
import { InternalWithClassicInputComponentComponent } from "./internal-with-classic-input-component/internal-with-classic-input-component.component";
import { InternalWithModelInputComponentComponent } from './internal-with-model-input-component/internal-with-model-input-component.component';
import { InternalWithSignalInputComponentComponent } from './internal-with-signal-input-component/internal-with-signal-input-component.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ContentItemComponent } from './content-item/content-item.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TestComponentWithClassicInputComponent,
    TestComponentWithModelSignalComponent,
    TestComponentWithSignalInputComponent,
    InternalWithClassicInputComponentComponent,
    InternalWithModelInputComponentComponent,
    InternalWithSignalInputComponentComponent,
    ContentContainerComponent,
    ContentItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgMocksBugs';

  public onValueChange(value: string, inputName: string) {
    console.log('value', value, 'inputName', inputName);
  }
}
