import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithClassicInputComponentComponent } from './internal-with-classic-input-component.component';

describe('InternalWithClassicInputComponentComponent', () => {
  let component: InternalWithClassicInputComponentComponent;
  let fixture: ComponentFixture<InternalWithClassicInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalWithClassicInputComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalWithClassicInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
