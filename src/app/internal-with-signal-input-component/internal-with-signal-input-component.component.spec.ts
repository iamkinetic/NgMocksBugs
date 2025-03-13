import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithSignalInputComponentComponent } from './internal-with-signal-input-component.component';

describe('InternalWithSignalInputComponentComponent', () => {
  let component: InternalWithSignalInputComponentComponent;
  let fixture: ComponentFixture<InternalWithSignalInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalWithSignalInputComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalWithSignalInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
