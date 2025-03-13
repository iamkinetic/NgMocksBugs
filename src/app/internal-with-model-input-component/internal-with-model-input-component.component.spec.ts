import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithModelInputComponentComponent } from './internal-with-model-input-component.component';

describe('InternalWithModelInputComponentComponent', () => {
  let component: InternalWithModelInputComponentComponent;
  let fixture: ComponentFixture<InternalWithModelInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalWithModelInputComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalWithModelInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
