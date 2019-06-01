import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanel3Component } from './admin-panel3.component';

describe('AdminPanel3Component', () => {
  let component: AdminPanel3Component;
  let fixture: ComponentFixture<AdminPanel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
