import { Component, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-internal-with-view-child-component',
  imports: [],
  templateUrl: './internal-with-view-child-component.component.html',
  styleUrl: './internal-with-view-child-component.component.scss'
})
export class InternalWithViewChildComponentComponent {
  public viewChild = viewChild('viewRef');
  public namedViewChild = viewChild('namedView');

  public getViewChild(): unknown {
    return this.viewChild();
  }

  public getNamedViewChild(): unknown {
    return this.namedViewChild();
  }
}
