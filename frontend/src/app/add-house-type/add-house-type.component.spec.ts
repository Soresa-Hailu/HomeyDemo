import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHouseTypeComponent } from './add-house-type.component';

describe('AddHouseTypeComponent', () => {
  let component: AddHouseTypeComponent;
  let fixture: ComponentFixture<AddHouseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHouseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHouseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
