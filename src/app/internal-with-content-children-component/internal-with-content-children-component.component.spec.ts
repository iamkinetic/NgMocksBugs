import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithContentChildrenComponentComponent } from './internal-with-content-children-component.component';

describe('InternalWithContentChildrenComponentComponent', () => {
  let component: InternalWithContentChildrenComponentComponent;
  let fixture: ComponentFixture<InternalWithContentChildrenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalWithContentChildrenComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalWithContentChildrenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
