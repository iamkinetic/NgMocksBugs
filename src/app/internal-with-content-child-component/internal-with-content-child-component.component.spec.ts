import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithContentChildComponentComponent } from './internal-with-content-child-component.component';

describe('InternalWithContentChildComponentComponent', () => {
  let component: InternalWithContentChildComponentComponent;
  let fixture: ComponentFixture<InternalWithContentChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalWithContentChildComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalWithContentChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
