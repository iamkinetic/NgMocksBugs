import { Component, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-internal-with-content-child-component',
  imports: [],
  templateUrl: './internal-with-content-child-component.component.html',
  styleUrl: './internal-with-content-child-component.component.scss'
})
export class InternalWithContentChildComponentComponent {
  public contentChild = contentChild('childRef');
  public namedContentChild = contentChild('namedChild');

  public getContentChild(): unknown {
    return this.contentChild();
  }

  public getNamedContentChild(): unknown {
    return this.namedContentChild();
  }
}
