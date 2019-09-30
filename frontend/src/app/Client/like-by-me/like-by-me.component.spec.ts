import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeByMeComponent } from './like-by-me.component';

describe('LikeByMeComponent', () => {
  let component: LikeByMeComponent;
  let fixture: ComponentFixture<LikeByMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeByMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
