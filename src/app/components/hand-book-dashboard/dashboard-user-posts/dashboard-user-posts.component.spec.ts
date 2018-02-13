import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserPostsComponent } from './dashboard-user-posts.component';

describe('DashboardUserPostsComponent', () => {
  let component: DashboardUserPostsComponent;
  let fixture: ComponentFixture<DashboardUserPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUserPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
