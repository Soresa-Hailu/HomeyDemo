import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedByMeComponent } from './posted-by-me.component';

describe('PostedByMeComponent', () => {
  let component: PostedByMeComponent;
  let fixture: ComponentFixture<PostedByMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedByMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
