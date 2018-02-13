import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookDashboardComponent } from './hand-book-dashboard.component';

describe('HandBookDashboardComponent', () => {
  let component: HandBookDashboardComponent;
  let fixture: ComponentFixture<HandBookDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandBookDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
