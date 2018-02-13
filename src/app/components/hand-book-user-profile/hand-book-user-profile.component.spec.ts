import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookUserProfileComponent } from './hand-book-user-profile.component';

describe('HandBookUserProfileComponent', () => {
  let component: HandBookUserProfileComponent;
  let fixture: ComponentFixture<HandBookUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandBookUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
