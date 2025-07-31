import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithViewChildComponentComponent } from './internal-with-view-child-component.component';

describe('InternalWithViewChildComponentComponent', () => {
  let component: InternalWithViewChildComponentComponent;
  let fixture: ComponentFixture<InternalWithViewChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalWithViewChildComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalWithViewChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
