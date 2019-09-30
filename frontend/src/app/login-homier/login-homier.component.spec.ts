import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHomierComponent } from './login-homier.component';

describe('LoginHomierComponent', () => {
  let component: LoginHomierComponent;
  let fixture: ComponentFixture<LoginHomierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHomierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHomierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
