import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorSidebarComponent } from './realtor-sidebar.component';

describe('RealtorSidebarComponent', () => {
  let component: RealtorSidebarComponent;
  let fixture: ComponentFixture<RealtorSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
