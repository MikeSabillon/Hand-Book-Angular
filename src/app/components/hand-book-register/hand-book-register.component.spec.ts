import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookRegisterComponent } from './hand-book-register.component';

describe('HandBookRegisterComponent', () => {
  let component: HandBookRegisterComponent;
  let fixture: ComponentFixture<HandBookRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandBookRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
