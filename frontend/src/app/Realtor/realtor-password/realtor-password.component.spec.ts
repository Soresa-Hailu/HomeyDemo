import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorPasswordComponent } from './realtor-password.component';

describe('RealtorPasswordComponent', () => {
  let component: RealtorPasswordComponent;
  let fixture: ComponentFixture<RealtorPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
