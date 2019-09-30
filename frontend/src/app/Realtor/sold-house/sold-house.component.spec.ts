import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldHouseComponent } from './sold-house.component';

describe('SoldHouseComponent', () => {
  let component: SoldHouseComponent;
  let fixture: ComponentFixture<SoldHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
