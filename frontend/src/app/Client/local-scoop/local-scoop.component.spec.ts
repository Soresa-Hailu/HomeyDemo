import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalScoopComponent } from './local-scoop.component';

describe('LocalScoopComponent', () => {
  let component: LocalScoopComponent;
  let fixture: ComponentFixture<LocalScoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalScoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalScoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
