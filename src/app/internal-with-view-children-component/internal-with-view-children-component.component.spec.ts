import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithViewChildrenComponentComponent } from './internal-with-view-children-component.component';

describe('InternalWithViewChildrenComponentComponent', () => {
  let component: InternalWithViewChildrenComponentComponent;
  let fixture: ComponentFixture<InternalWithViewChildrenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalWithViewChildrenComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalWithViewChildrenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
