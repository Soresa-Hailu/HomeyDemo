import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedHouseComponent } from './accepted-house.component';

describe('AcceptedHouseComponent', () => {
  let component: AcceptedHouseComponent;
  let fixture: ComponentFixture<AcceptedHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
