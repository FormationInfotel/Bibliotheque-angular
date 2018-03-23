import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowvalidationComponent } from './borrowvalidation.component';

describe('BorrowvalidationComponent', () => {
  let component: BorrowvalidationComponent;
  let fixture: ComponentFixture<BorrowvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
