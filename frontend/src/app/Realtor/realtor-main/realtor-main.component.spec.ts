import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorMainComponent } from './realtor-main.component';

describe('RealtorMainComponent', () => {
  let component: RealtorMainComponent;
  let fixture: ComponentFixture<RealtorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
