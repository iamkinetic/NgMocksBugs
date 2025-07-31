import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit, input, contentChildren, effect, contentChild, viewChildren, viewChild } from '@angular/core';
import { ContentItemComponent } from '../content-item/content-item.component';

@Component({
    selector: 'app-content-container',
    imports: [ContentItemComponent],
    template: `
    <div class="container">
      <h2>{{ containerTitle() }}</h2>
      
      <!-- Hardcoded content items -->
      <div class="content-wrapper">
        <h3>Template Items:</h3>
        <app-content-item title="allo" id="patate" />
        <app-content-item title="allo2" description="Description for allo2" />
      </div>

      <!-- Projected content -->
      <div class="content-wrapper">
        <h3>Projected Items:</h3>
        <ng-content></ng-content>
      </div>

      <!-- Summary -->
      <div class="summary">
        <strong>Summary:</strong> {{ getSummary() }}
      </div>
    </div>
  `,
    styles: [`
    .container {
      padding: 16px;
      border: 2px solid #007bff;
      border-radius: 8px;
      margin: 16px 0;
      background-color: #f8f9fa;
    }

    h2 {
      margin-top: 0;
      color: #007bff;
    }

    h3 {
      color: #333;
      margin: 16px 0 8px 0;
    }

    .featured-wrapper {
      background-color: #fff3cd;
      padding: 8px;
      border-radius: 4px;
      border-left: 4px solid #ffc107;
    }

    .content-wrapper {
      background-color: white;
      padding: 8px;
      border-radius: 4px;
    }

    .summary {
      margin-top: 16px;
      padding: 8px;
      background-color: #d4edda;
      border-radius: 4px;
      border-left: 4px solid #28a745;
    }
  `]
})
export class ContentContainerComponent implements AfterContentInit {
    containerTitle = input<string>('Content Container');

    @ContentChild(ContentItemComponent, { static: false })
    featuredItem?: ContentItemComponent;

    @ContentChildren(ContentItemComponent)
    allItems?: QueryList<ContentItemComponent>;

    // Template children (viewChildren for items in the template)
    public templateItems = viewChildren<ContentItemComponent>(ContentItemComponent);
    public myPatate = viewChild<ContentItemComponent>('patate');

    // Projected children (contentChildren for projected content)
    public projectedItems = contentChildren<ContentItemComponent>(ContentItemComponent);

    public constructor() {
      effect(() => {
        console.log('Template items:', this.templateItems());
        console.log('Projected items:', this.projectedItems());
        console.log('Featured item (patate):', this.myPatate());
      });
    }

    ngAfterContentInit() {
        console.log('Featured item:', this.featuredItem);
        console.log('All items count:', this.allItems?.length);

        if (this.allItems) {
            this.allItems.changes.subscribe(() => {
                console.log('Content items changed, new count:', this.allItems?.length);
            });
        }
    }

    getSummary(): string {
        const templateCount = this.templateItems().length;
        const projectedCount = this.projectedItems().length;
        const allItemsCount = this.allItems?.length || 0;
        const hasFeatured = !!this.featuredItem;

        if (templateCount === 0 && projectedCount === 0 && allItemsCount === 0) {
            return 'No content items found';
        }

        return `Template: ${templateCount}, Projected: ${projectedCount}, Legacy QueryList: ${allItemsCount}${hasFeatured ? ' with featured item' : ''}`;
    }

    getAllTitles(): string[] {
        const templateTitles = this.templateItems().map(item => item.title());
        const projectedTitles = this.projectedItems().map(item => item.title());
        const legacyTitles = this.allItems?.map(item => item.title()) || [];
        return [...templateTitles, ...projectedTitles, ...legacyTitles];
    }
}
