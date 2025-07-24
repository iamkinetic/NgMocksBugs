import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit, input } from '@angular/core';
import { ContentItemComponent } from '../content-item/content-item.component';

@Component({
    selector: 'app-content-container',
    template: `
    <div class="container">
      <h2>{{ containerTitle() }}</h2>
      
      @if (featuredItem) {
        <div class="featured-content">
          <h3>Featured Item:</h3>
          <div class="featured-wrapper">
            <ng-content select="app-content-item[featured]"></ng-content>
          </div>
        </div>
      }
      
      <div class="all-content">
        <h3>All Items ({{ allItems?.length || 0 }} total):</h3>
        <div class="content-wrapper">
          <ng-content select="app-content-item"></ng-content>
        </div>
      </div>
      
      <div class="summary">
        <p>Summary: {{ getSummary() }}</p>
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
        const count = this.allItems?.length || 0;
        const hasFeatured = !!this.featuredItem;

        if (count === 0) {
            return 'No content items found';
        }

        return `Found ${count} content item${count > 1 ? 's' : ''}${hasFeatured ? ' with featured item' : ''}`;
    }

    getFeaturedTitle(): string {
        return this.featuredItem?.title() || 'No featured item';
    }

    getAllTitles(): string[] {
        return this.allItems?.map(item => item.title()) || [];
    }
}
