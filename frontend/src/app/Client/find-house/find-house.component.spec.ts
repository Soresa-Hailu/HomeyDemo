import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHouseComponent } from './find-house.component';

describe('FindHouseComponent', () => {
  let component: FindHouseComponent;
  let fixture: ComponentFixture<FindHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
