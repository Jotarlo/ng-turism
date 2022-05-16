import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAmusementComponent } from './edit-amusement.component';

describe('EditAmusementComponent', () => {
  let component: EditAmusementComponent;
  let fixture: ComponentFixture<EditAmusementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAmusementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAmusementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
