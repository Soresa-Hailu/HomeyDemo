import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedHouseComponent } from './rented-house.component';

describe('RentedHouseComponent', () => {
  let component: RentedHouseComponent;
  let fixture: ComponentFixture<RentedHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
