import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookLoginComponent } from './hand-book-login.component';

describe('HandBookLoginComponent', () => {
  let component: HandBookLoginComponent;
  let fixture: ComponentFixture<HandBookLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandBookLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
