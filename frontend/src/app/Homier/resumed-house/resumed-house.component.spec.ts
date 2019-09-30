import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedHouseComponent } from './resumed-house.component';

describe('ResumedHouseComponent', () => {
  let component: ResumedHouseComponent;
  let fixture: ComponentFixture<ResumedHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumedHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
