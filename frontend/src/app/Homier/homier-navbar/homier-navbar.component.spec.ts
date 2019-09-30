import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomierNavbarComponent } from './homier-navbar.component';

describe('HomierNavbarComponent', () => {
  let component: HomierNavbarComponent;
  let fixture: ComponentFixture<HomierNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomierNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomierNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
