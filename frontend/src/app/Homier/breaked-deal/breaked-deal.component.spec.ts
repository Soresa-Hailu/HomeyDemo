import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakedDealComponent } from './breaked-deal.component';

describe('BreakedDealComponent', () => {
  let component: BreakedDealComponent;
  let fixture: ComponentFixture<BreakedDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakedDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakedDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
