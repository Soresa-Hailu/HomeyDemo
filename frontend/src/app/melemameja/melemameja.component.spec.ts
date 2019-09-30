import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelemamejaComponent } from './melemameja.component';

describe('MelemamejaComponent', () => {
  let component: MelemamejaComponent;
  let fixture: ComponentFixture<MelemamejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelemamejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelemamejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
