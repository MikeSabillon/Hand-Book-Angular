import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookUserPostsComponent } from './hand-book-user-posts.component';

describe('HandBookUserPostsComponent', () => {
  let component: HandBookUserPostsComponent;
  let fixture: ComponentFixture<HandBookUserPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandBookUserPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
