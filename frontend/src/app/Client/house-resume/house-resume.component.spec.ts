import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseResumeComponent } from './house-resume.component';

describe('HouseResumeComponent', () => {
  let component: HouseResumeComponent;
  let fixture: ComponentFixture<HouseResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
