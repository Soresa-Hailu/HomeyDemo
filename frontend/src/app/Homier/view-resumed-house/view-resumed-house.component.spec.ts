import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResumedHouseComponent } from './view-resumed-house.component';

describe('ViewResumedHouseComponent', () => {
  let component: ViewResumedHouseComponent;
  let fixture: ComponentFixture<ViewResumedHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResumedHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResumedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
