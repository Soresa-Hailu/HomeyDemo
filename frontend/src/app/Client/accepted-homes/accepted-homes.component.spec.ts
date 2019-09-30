import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedHomesComponent } from './accepted-homes.component';

describe('AcceptedHomesComponent', () => {
  let component: AcceptedHomesComponent;
  let fixture: ComponentFixture<AcceptedHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
