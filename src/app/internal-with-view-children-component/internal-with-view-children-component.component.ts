import { Component, viewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-internal-with-view-children-component',
  imports: [],
  templateUrl: './internal-with-view-children-component.component.html',
  styleUrl: './internal-with-view-children-component.component.scss'
})
export class InternalWithViewChildrenComponentComponent {
  public viewChildren = viewChildren('itemRef');
  public namedViewChildren = viewChildren('namedItem');

  public getViewChildren(): readonly unknown[] {
    return this.viewChildren();
  }

  public getNamedViewChildren(): readonly unknown[] {
    return this.namedViewChildren();
  }

  public getViewChildrenCount(): number {
    return this.viewChildren().length;
  }
}
