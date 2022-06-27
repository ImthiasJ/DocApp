import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatebookingComponent } from './validatebooking.component';

describe('ValidatebookingComponent', () => {
  let component: ValidatebookingComponent;
  let fixture: ComponentFixture<ValidatebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
