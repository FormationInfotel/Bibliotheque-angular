import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelivreComponent } from './createlivre.component';

describe('CreatelivreComponent', () => {
  let component: CreatelivreComponent;
  let fixture: ComponentFixture<CreatelivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
