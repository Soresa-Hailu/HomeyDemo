import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEthiopiaComponent } from './map-ethiopia.component';

describe('MapEthiopiaComponent', () => {
  let component: MapEthiopiaComponent;
  let fixture: ComponentFixture<MapEthiopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapEthiopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEthiopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
