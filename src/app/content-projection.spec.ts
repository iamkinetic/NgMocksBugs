import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MockComponents, ngMocks } from 'ng-mocks';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ContentItemComponent } from './content-item/content-item.component';

// Test component that uses ContentContainerComponent with ContentItemComponent
@Component({
    selector: 'app-test-content-projection',
    template: `
    <app-content-container containerTitle="Test Content Projection">
      <app-content-item 
        featured 
        title="Featured Test Item" 
        description="This is a featured test content item">
      </app-content-item>
      
      <app-content-item 
        title="Regular Test Item 1" 
        description="This is a regular test content item">
      </app-content-item>
      
      <app-content-item 
        title="Regular Test Item 2" 
        description="Another regular test content item">
      </app-content-item>
    </app-content-container>
  `,
    imports: [ContentContainerComponent, ContentItemComponent]
})
class TestContentProjectionComponent { }

describe('Content Projection with ng-mocks', () => {
    let fixture: ComponentFixture<TestContentProjectionComponent>;
    let component: TestContentProjectionComponent;

    describe('When both container and content items are mocked', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TestContentProjectionComponent],
                declarations: [
                    ...MockComponents(
                        ContentContainerComponent,
                        ContentItemComponent
                    )
                ]
            }).compileComponents();

            fixture = TestBed.createComponent(TestContentProjectionComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create the test component', () => {
            expect(component).toBeTruthy();
        });

        it('should find the mocked content container component', () => {
            const containerComponent = ngMocks.findInstance(ContentContainerComponent);
            expect(containerComponent).toBeTruthy();
            console.log('Mocked container component:', containerComponent);
        });

        it('should find mocked content item components', () => {
            const contentItems = ngMocks.findInstances(ContentItemComponent);
            console.log('Mocked content items found:', contentItems.length);
            console.log('Mocked content items:', contentItems);

            // With mocked components, we expect to find them
            expect(contentItems.length).toBeGreaterThan(0);
        });

        it('should handle mocked ContentChild and ContentChildren', () => {
            const containerComponent = ngMocks.findInstance(ContentContainerComponent);

            // When the container is mocked, its properties and methods might return undefined
            console.log('Mocked container featuredItem:', containerComponent.featuredItem);
            console.log('Mocked container allItems:', containerComponent.allItems);

            // Test if methods exist on mocked component
            console.log('getFeaturedTitle method exists:', typeof containerComponent.getFeaturedTitle);
            console.log('getAllTitles method exists:', typeof containerComponent.getAllTitles);
            console.log('getSummary method exists:', typeof containerComponent.getSummary);

            // When both container and content are mocked, we still expect the structure to exist
            expect(containerComponent.featuredItem).toBeDefined();
            expect(containerComponent.allItems).toBeDefined();
            expect(typeof containerComponent.getFeaturedTitle).toBe('function');
            expect(typeof containerComponent.getAllTitles).toBe('function');
            expect(typeof containerComponent.getSummary).toBe('function');
        });
    });

    describe('When only content items are mocked (container is real)', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TestContentProjectionComponent],
                declarations: [
                    ...MockComponents(
                        ContentItemComponent // Only mock content items
                    )
                ]
            }).compileComponents();

            fixture = TestBed.createComponent(TestContentProjectionComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create the test component', () => {
            expect(component).toBeTruthy();
        });

        it('should find the real content container component', () => {
            const containerComponent = ngMocks.findInstance(ContentContainerComponent);
            expect(containerComponent).toBeTruthy();
            console.log('Real container component:', containerComponent);
        });

        it('should handle ContentChild and ContentChildren with mocked content', () => {
            const containerComponent = ngMocks.findInstance(ContentContainerComponent);

            // With real container but mocked content items
            console.log('Real container featuredItem:', containerComponent.featuredItem);
            console.log('Real container allItems:', containerComponent.allItems);
            console.log('Real container allItems length:', containerComponent.allItems?.length);

            // Test method calls - when content items are mocked, their signal inputs become properties
            try {
                const featuredTitle = containerComponent.getFeaturedTitle();
                const allTitles = containerComponent.getAllTitles();
                const summary = containerComponent.getSummary();

                console.log('Featured title:', featuredTitle);
                console.log('All titles:', allTitles);
                console.log('Summary:', summary);

                expect(featuredTitle).toBeDefined();
                expect(allTitles).toBeDefined();
                expect(summary).toBeDefined();
                expect(Array.isArray(allTitles)).toBe(true);
            } catch (error) {
                console.log('Error calling methods with mocked content:', (error as Error).message);
                // This is expected when mocked components have properties instead of signal functions
                expect((error as Error).message).toContain('title is not a function');
            }
        });

        it('should test how ng-mocks handles content projection queries', () => {
            const containerComponent = ngMocks.findInstance(ContentContainerComponent);

            // Trigger content init to see how mocked content affects queries
            if (containerComponent.ngAfterContentInit) {
                containerComponent.ngAfterContentInit();
            }

            // Check if ContentChild picks up mocked content
            const hasContentChild = containerComponent.featuredItem !== undefined;
            console.log('Has ContentChild (featuredItem):', hasContentChild);

            // Check if ContentChildren picks up mocked content
            const hasContentChildren = containerComponent.allItems && containerComponent.allItems.length > 0;
            console.log('Has ContentChildren (allItems):', hasContentChildren);
            console.log('ContentChildren count:', containerComponent.allItems?.length || 0);

            // This will help us understand how ng-mocks handles content projection
            if (hasContentChild) {
                console.log('ContentChild type:', typeof containerComponent.featuredItem);
                console.log('ContentChild title method:', typeof containerComponent.featuredItem?.title);
            }

            if (hasContentChildren) {
                console.log('ContentChildren type:', typeof containerComponent.allItems);
                containerComponent.allItems?.forEach((item, index) => {
                    console.log(`ContentChildren[${index}] type:`, typeof item);
                    console.log(`ContentChildren[${index}] title method:`, typeof item.title);
                });
            }

            // Add expectation - we expect ng-mocks to properly handle content projection
            expect(hasContentChild).toBe(true);
            expect(hasContentChildren).toBe(true);
        });
    });

    describe('When neither container nor content items are mocked (both real)', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TestContentProjectionComponent]
                // No mocked components
            }).compileComponents();

            fixture = TestBed.createComponent(TestContentProjectionComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create the test component', () => {
            expect(component).toBeTruthy();
        });

        it('should work with real components and content projection', () => {
            const containerComponent = ngMocks.findInstance(ContentContainerComponent);
            expect(containerComponent).toBeTruthy();

            // With real components, content projection should work normally
            console.log('Real container with real content featuredItem:', containerComponent.featuredItem);
            console.log('Real container with real content allItems:', containerComponent.allItems);
            console.log('Real container with real content allItems length:', containerComponent.allItems?.length);

            const featuredTitle = containerComponent.getFeaturedTitle();
            const allTitles = containerComponent.getAllTitles();
            const summary = containerComponent.getSummary();

            console.log('Real featured title:', featuredTitle);
            console.log('Real all titles:', allTitles);
            console.log('Real summary:', summary);

            // With real components, we should get actual content
            expect(containerComponent.allItems?.length).toBeGreaterThan(0);
            expect(allTitles.length).toBeGreaterThan(0);
            expect(summary).toContain('Found');
        });
    });
});
