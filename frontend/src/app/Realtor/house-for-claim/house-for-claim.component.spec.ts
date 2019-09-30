import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseForClaimComponent } from './house-for-claim.component';

describe('HouseForClaimComponent', () => {
  let component: HouseForClaimComponent;
  let fixture: ComponentFixture<HouseForClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseForClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseForClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
