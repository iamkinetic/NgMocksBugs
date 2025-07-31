import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentWithClassicInputComponent, TestComponentWithModelSignalComponent, TestComponentWithSignalInputComponent } from '@cauca-911/material'
import { InternalWithClassicInputComponentComponent } from "./internal-with-classic-input-component/internal-with-classic-input-component.component";
import { InternalWithModelInputComponentComponent } from './internal-with-model-input-component/internal-with-model-input-component.component';
import { InternalWithSignalInputComponentComponent } from './internal-with-signal-input-component/internal-with-signal-input-component.component';
import { InternalWithOutputSignalComponentComponent } from './internal-with-output-signal-component/internal-with-output-signal-component.component';
import { InternalWithContentChildComponentComponent } from './internal-with-content-child-component/internal-with-content-child-component.component';
import { InternalWithContentChildrenComponentComponent } from './internal-with-content-children-component/internal-with-content-children-component.component';
import { InternalWithViewChildComponentComponent } from './internal-with-view-child-component/internal-with-view-child-component.component';
import { InternalWithViewChildrenComponentComponent } from './internal-with-view-children-component/internal-with-view-children-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponentWithClassicInputComponent, TestComponentWithModelSignalComponent, TestComponentWithSignalInputComponent, InternalWithClassicInputComponentComponent, InternalWithModelInputComponentComponent, InternalWithSignalInputComponentComponent, InternalWithOutputSignalComponentComponent, InternalWithContentChildComponentComponent, InternalWithContentChildrenComponentComponent, InternalWithViewChildComponentComponent, InternalWithViewChildrenComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgMocksBugs';

  public onValueChange(value: string, inputName: string) {
    console.log('value', value, 'inputName', inputName);
  }
}
