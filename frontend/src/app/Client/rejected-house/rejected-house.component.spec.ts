import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedHouseComponent } from './rejected-house.component';

describe('RejectedHouseComponent', () => {
  let component: RejectedHouseComponent;
  let fixture: ComponentFixture<RejectedHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
