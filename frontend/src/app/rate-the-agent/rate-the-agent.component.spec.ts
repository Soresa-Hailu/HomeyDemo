import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTheAgentComponent } from './rate-the-agent.component';

describe('RateTheAgentComponent', () => {
  let component: RateTheAgentComponent;
  let fixture: ComponentFixture<RateTheAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateTheAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateTheAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
