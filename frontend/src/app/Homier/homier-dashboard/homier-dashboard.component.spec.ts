import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomierDashboardComponent } from './homier-dashboard.component';

describe('HomierDashboardComponent', () => {
  let component: HomierDashboardComponent;
  let fixture: ComponentFixture<HomierDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomierDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomierDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
