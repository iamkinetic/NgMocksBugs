import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, ngMocks } from 'ng-mocks';
import { ContentContainerComponent } from './content-container.component';
import { ContentItemComponent } from '../content-item/content-item.component';

describe('ContentContainerComponent', () => {
    let component: ContentContainerComponent;
    let fixture: ComponentFixture<ContentContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContentContainerComponent],
            declarations: [
                ...MockComponents(ContentItemComponent)
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ContentContainerComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display container title', () => {
        fixture.componentRef.setInput('containerTitle', 'Test Container');
        fixture.detectChanges();

        const titleElement = fixture.nativeElement.querySelector('h2');
        expect(titleElement.textContent).toContain('Test Container');
    });

    it('should show 0 items when no content is projected', () => {
        fixture.detectChanges();

        const allContentHeading = fixture.nativeElement.querySelector('.all-content h3');
        expect(allContentHeading.textContent).toContain('All Items (0 total)');
    });

    it('should return "No content items found" in summary when empty', () => {
        fixture.detectChanges();

        expect(component.getSummary()).toBe('No content items found');
    });

    it('should return empty array for getAllTitles when no items', () => {
        fixture.detectChanges();

        expect(component.getAllTitles()).toEqual([]);
    });

    it('should return "No featured item" when no featured item exists', () => {
        fixture.detectChanges();

        expect(component.getFeaturedTitle()).toBe('No featured item');
    });

    describe('with mocked content items', () => {
        it('should handle ContentChild and ContentChildren with mocked components', () => {
            // This test demonstrates how ng-mocks should handle ContentChild/ContentChildren
            // The actual behavior will depend on how well ng-mocks supports these features

            fixture.detectChanges();

            // Test that the component doesn't crash when ContentChild/ContentChildren are undefined
            expect(component.featuredItem).toBeUndefined();
            expect(component.allItems).toBeDefined();
            expect(component.allItems?.length).toBe(0);
        });
    });
});
