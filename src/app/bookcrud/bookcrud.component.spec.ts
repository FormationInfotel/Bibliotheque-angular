import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcrudComponent } from './bookcrud.component';

describe('BookcrudComponent', () => {
  let component: BookcrudComponent;
  let fixture: ComponentFixture<BookcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
