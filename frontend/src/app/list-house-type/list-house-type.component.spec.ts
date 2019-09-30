import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHouseTypeComponent } from './list-house-type.component';

describe('ListHouseTypeComponent', () => {
  let component: ListHouseTypeComponent;
  let fixture: ComponentFixture<ListHouseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHouseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHouseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
