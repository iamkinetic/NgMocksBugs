import { Component, input } from '@angular/core';

@Component({
    selector: 'app-content-item',
    template: `
    <div class="content-item">
      <h4>{{ title() }}</h4>
      <p>{{ description() }}</p>
    </div>
  `,
    styles: [`
    .content-item {
      padding: 8px;
      margin: 4px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }
    
    h4 {
      margin: 0 0 8px 0;
      color: #333;
    }
    
    p {
      margin: 0;
      color: #666;
    }
  `]
})
export class ContentItemComponent {
    title = input.required<string>();
    description = input<string>('No description provided');
}
