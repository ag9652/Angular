import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UPdateEmpComponent } from './update-emp.component';

describe('UPdateEmpComponent', () => {
  let component: UPdateEmpComponent;
  let fixture: ComponentFixture<UPdateEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPdateEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPdateEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
