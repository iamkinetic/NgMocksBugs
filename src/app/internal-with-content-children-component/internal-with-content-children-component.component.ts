import { Component, contentChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-internal-with-content-children-component',
  imports: [],
  templateUrl: './internal-with-content-children-component.component.html',
  styleUrl: './internal-with-content-children-component.component.scss'
})
export class InternalWithContentChildrenComponentComponent {
  public contentChildren = contentChildren('itemRef');
  public namedContentChildren = contentChildren('namedItem');

  public getContentChildren(): readonly unknown[] {
    return this.contentChildren();
  }

  public getNamedContentChildren(): readonly unknown[] {
    return this.namedContentChildren();
  }

  public getContentChildrenCount(): number {
    return this.contentChildren().length;
  }
}
