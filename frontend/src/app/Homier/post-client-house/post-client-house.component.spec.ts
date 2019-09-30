import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClientHouseComponent } from './post-client-house.component';

describe('PostClientHouseComponent', () => {
  let component: PostClientHouseComponent;
  let fixture: ComponentFixture<PostClientHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostClientHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostClientHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
