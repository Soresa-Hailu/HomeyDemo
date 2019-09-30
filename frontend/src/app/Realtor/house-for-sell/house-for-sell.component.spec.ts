import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseForSellComponent } from './house-for-sell.component';

describe('HouseForSellComponent', () => {
  let component: HouseForSellComponent;
  let fixture: ComponentFixture<HouseForSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseForSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseForSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
