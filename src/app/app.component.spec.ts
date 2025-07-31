import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, ngMocks } from 'ng-mocks';
import { TestComponentWithClassicInputComponent, TestComponentWithModelSignalComponent, TestComponentWithSignalInputComponent } from '@cauca-911/material';
import { AppComponent } from './app.component';
import { InternalWithClassicInputComponentComponent } from './internal-with-classic-input-component/internal-with-classic-input-component.component';
import { InternalWithModelInputComponentComponent } from './internal-with-model-input-component/internal-with-model-input-component.component';
import { InternalWithSignalInputComponentComponent } from './internal-with-signal-input-component/internal-with-signal-input-component.component';
import { InternalWithOutputSignalComponentComponent } from './internal-with-output-signal-component/internal-with-output-signal-component.component';
import { InternalWithContentChildComponentComponent } from './internal-with-content-child-component/internal-with-content-child-component.component';
import { InternalWithContentChildrenComponentComponent } from './internal-with-content-children-component/internal-with-content-children-component.component';
import { InternalWithViewChildComponentComponent } from './internal-with-view-child-component/internal-with-view-child-component.component';
import { InternalWithViewChildrenComponentComponent } from './internal-with-view-children-component/internal-with-view-children-component.component';
import { toObservable } from '@angular/core/rxjs-interop';

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
          InternalWithOutputSignalComponentComponent,
          InternalWithContentChildComponentComponent,
          InternalWithContentChildrenComponentComponent,
          InternalWithViewChildComponentComponent,
          InternalWithViewChildrenComponentComponent,
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

  // Tests for output signal components
  it('should have a component with output signals that can be mocked', () => {
    const component = ngMocks.findInstance(InternalWithOutputSignalComponentComponent);

    expect(component).toBeTruthy();
    expect(component.valueChange).toBeDefined();
    expect(component.customEvent).toBeDefined();
  });

  it('should be able to emit values from mocked output signals', () => {
    const component = ngMocks.findInstance(InternalWithOutputSignalComponentComponent);
    let valueChangeEmitted: string | undefined;
    let customEventEmitted: number | undefined;

    component.valueChange.subscribe((value: string) => {
      valueChangeEmitted = value;
    });

    component.customEvent.subscribe((value: number) => {
      customEventEmitted = value;
    });

    component.valueChange.emit('test-output');
    component.customEvent.emit(123);

    expect(valueChangeEmitted).toBe('test-output');
    expect(customEventEmitted).toBe(123);
  });

  // Tests for contentChild signal components
  it('should have a component with contentChild signals that can be mocked', () => {
    const component = ngMocks.findInstance(InternalWithContentChildComponentComponent);

    expect(component).toBeTruthy();
    expect(component.contentChild).toBeDefined();
    expect(component.namedContentChild).toBeDefined();
    expect(component.getContentChild).toBeDefined();
    expect(component.getNamedContentChild).toBeDefined();
  });

  // Tests for contentChildren signal components
  it('should have a component with contentChildren signals that can be mocked', () => {
    const component = ngMocks.findInstance(InternalWithContentChildrenComponentComponent);

    expect(component).toBeTruthy();
    expect(component.contentChildren).toBeDefined();
    expect(component.namedContentChildren).toBeDefined();
    expect(component.getContentChildren).toBeDefined();
    expect(component.getNamedContentChildren).toBeDefined();
    expect(component.getContentChildrenCount).toBeDefined();
  });

  // Tests for viewChild signal components
  it('should have a component with viewChild signals that can be mocked', () => {
    const component = ngMocks.findInstance(InternalWithViewChildComponentComponent);

    expect(component).toBeTruthy();
    expect(component.viewChild).toBeDefined();
    expect(component.namedViewChild).toBeDefined();
    expect(component.getViewChild).toBeDefined();
    expect(component.getNamedViewChild).toBeDefined();
  });

  // Tests for viewChildren signal components
  it('should have a component with viewChildren signals that can be mocked', () => {
    const component = ngMocks.findInstance(InternalWithViewChildrenComponentComponent);

    expect(component).toBeTruthy();
    expect(component.viewChildren).toBeDefined();
    expect(component.namedViewChildren).toBeDefined();
    expect(component.getViewChildren).toBeDefined();
    expect(component.getNamedViewChildren).toBeDefined();
    expect(component.getViewChildrenCount).toBeDefined();
  });
});
