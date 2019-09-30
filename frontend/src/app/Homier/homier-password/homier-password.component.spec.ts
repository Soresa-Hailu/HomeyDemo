import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomierPasswordComponent } from './homier-password.component';

describe('HomierPasswordComponent', () => {
  let component: HomierPasswordComponent;
  let fixture: ComponentFixture<HomierPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomierPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomierPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
