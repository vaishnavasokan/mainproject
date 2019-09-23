import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecruiterComponent } from './editrecruiter.component';

describe('EditrecruiterComponent', () => {
  let component: EditrecruiterComponent;
  let fixture: ComponentFixture<EditrecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
