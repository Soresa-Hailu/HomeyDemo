import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomierSidebarComponent } from './homier-sidebar.component';

describe('HomierSidebarComponent', () => {
  let component: HomierSidebarComponent;
  let fixture: ComponentFixture<HomierSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomierSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomierSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
