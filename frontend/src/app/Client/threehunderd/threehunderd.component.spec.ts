import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreehunderdComponent } from './threehunderd.component';

describe('ThreehunderdComponent', () => {
  let component: ThreehunderdComponent;
  let fixture: ComponentFixture<ThreehunderdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreehunderdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreehunderdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
