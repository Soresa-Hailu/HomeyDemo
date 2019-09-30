import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteEthiopiaComponent } from './satellite-ethiopia.component';

describe('SatelliteEthiopiaComponent', () => {
  let component: SatelliteEthiopiaComponent;
  let fixture: ComponentFixture<SatelliteEthiopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelliteEthiopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteEthiopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
