import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordabilityCalculatorComponent } from './affordability-calculator.component';

describe('AffordabilityCalculatorComponent', () => {
  let component: AffordabilityCalculatorComponent;
  let fixture: ComponentFixture<AffordabilityCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffordabilityCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffordabilityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
