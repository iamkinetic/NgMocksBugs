import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, ngMocks } from 'ng-mocks';
import { TestComponentWithClassicInputComponent, TestComponentWithModelSignalComponent, TestComponentWithSignalInputComponent } from '@cauca-911/material';
import { AppComponent } from './app.component';
import { InternalWithClassicInputComponentComponent } from './internal-with-classic-input-component/internal-with-classic-input-component.component';
import { InternalWithModelInputComponentComponent } from './internal-with-model-input-component/internal-with-model-input-component.component';
import { InternalWithSignalInputComponentComponent } from './internal-with-signal-input-component/internal-with-signal-input-component.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ContentItemComponent } from './content-item/content-item.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      declarations: [
        ...MockComponents(
          TestComponentWithSignalInputComponent,
          TestComponentWithClassicInputComponent,
          TestComponentWithModelSignalComponent,
          InternalWithClassicInputComponentComponent,
          InternalWithModelInputComponentComponent,
          InternalWithSignalInputComponentComponent,
          ContentItemComponent, // Only mock the content items, not the container
        ),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should have a component with classic input set to "test1"', () => {
    const component = ngMocks.findInstance(TestComponentWithClassicInputComponent);

    expect(component.value).toBe('test1');

    console.log('component', component);
  });

  it('should have a component with signal input set to "test2"', () => {
    const component = ngMocks.findInstance(TestComponentWithSignalInputComponent);

    expect(component.value).toBe('test2');
  });

  it('should have a component with model signal set to "test3"', () => {
    const component = ngMocks.findInstance(TestComponentWithModelSignalComponent);

    expect(component.value).toBe('test3');

    console.log('component', component);
  });

  it('should have a component with classic input set to "four"', () => {
    const component = ngMocks.findInstance(InternalWithClassicInputComponentComponent);

    expect(component.value).toBe('four');
  });

  it('should have a component with signal input set to "five"', () => {
    const component = ngMocks.findInstance(InternalWithSignalInputComponentComponent);

    expect(component.value).toBe('five');
  });

  it('should have a component with model signal set to "six"', () => {
    const component = ngMocks.findInstance(InternalWithModelInputComponentComponent);

    expect(component.value).toBe('six');
  });

  it('should have a content container component', () => {
    const containerComponent = ngMocks.findInstance(ContentContainerComponent);

    expect(containerComponent).toBeTruthy();
    console.log('Content container component:', containerComponent);
  });

  it('should test ContentChild functionality in mocked component', () => {
    const containerComponent = ngMocks.findInstance(ContentContainerComponent);

    // Test how ng-mocks handles ContentChild
    console.log('Featured item (ContentChild):', containerComponent.featuredItem);
    console.log('Featured title method result:', containerComponent.getFeaturedTitle());

    // This will help us understand if ng-mocks properly mocks ContentChild behavior
    expect(containerComponent.getFeaturedTitle).toBeDefined();
  });

  it('should test ContentChildren functionality in mocked component', () => {
    const containerComponent = ngMocks.findInstance(ContentContainerComponent);

    // Test how ng-mocks handles ContentChildren
    console.log('All items (ContentChildren):', containerComponent.allItems);
    console.log('All items length:', containerComponent.allItems?.length);
    console.log('All titles method result:', containerComponent.getAllTitles());

    // This will help us understand if ng-mocks properly mocks ContentChildren behavior
    expect(containerComponent.getAllTitles).toBeDefined();
    expect(containerComponent.getAllTitles()).toEqual([]); // Should return empty array when no real content items
  });

  it('should test summary method with mocked content', () => {
    const containerComponent = ngMocks.findInstance(ContentContainerComponent);

    const summary = containerComponent.getSummary();
    console.log('Summary:', summary);

    expect(summary).toBeDefined();
    expect(typeof summary).toBe('string');
    expect(summary).toBe('No content items found'); // Since content items are mocked, none will be found
  });
});
