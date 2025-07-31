import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithOutputSignalComponentComponent } from './internal-with-output-signal-component.component';

describe('InternalWithOutputSignalComponentComponent', () => {
  let component: InternalWithOutputSignalComponentComponent;
  let fixture: ComponentFixture<InternalWithOutputSignalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalWithOutputSignalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalWithOutputSignalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
