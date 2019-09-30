import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorNavbarComponent } from './realtor-navbar.component';

describe('RealtorNavbarComponent', () => {
  let component: RealtorNavbarComponent;
  let fixture: ComponentFixture<RealtorNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
