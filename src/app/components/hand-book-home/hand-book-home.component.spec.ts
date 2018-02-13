import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookHomeComponent } from './hand-book-home.component';

describe('HandBookHomeComponent', () => {
  let component: HandBookHomeComponent;
  let fixture: ComponentFixture<HandBookHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandBookHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
