import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, ngMocks } from 'ng-mocks';
import { TestComponentWithClassicInputComponent, TestComponentWithModelSignalComponent, TestComponentWithSignalInputComponent } from '@cauca-911/material';
import { AppComponent } from './app.component';
import { InternalWithClassicInputComponentComponent } from './internal-with-classic-input-component/internal-with-classic-input-component.component';
import { InternalWithModelInputComponentComponent } from './internal-with-model-input-component/internal-with-model-input-component.component';
import { InternalWithSignalInputComponentComponent } from './internal-with-signal-input-component/internal-with-signal-input-component.component';

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
});
