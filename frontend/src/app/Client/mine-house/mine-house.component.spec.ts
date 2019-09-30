import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineHouseComponent } from './mine-house.component';

describe('MineHouseComponent', () => {
  let component: MineHouseComponent;
  let fixture: ComponentFixture<MineHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
