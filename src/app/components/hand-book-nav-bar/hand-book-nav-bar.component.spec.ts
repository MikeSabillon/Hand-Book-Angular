import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookNavBarComponent } from './hand-book-nav-bar.component';

describe('HandBookNavBarComponent', () => {
  let component: HandBookNavBarComponent;
  let fixture: ComponentFixture<HandBookNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandBookNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
