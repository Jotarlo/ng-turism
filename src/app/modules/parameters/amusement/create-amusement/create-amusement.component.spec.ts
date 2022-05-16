import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAmusementComponent } from './create-amusement.component';

describe('CreateAmusementComponent', () => {
  let component: CreateAmusementComponent;
  let fixture: ComponentFixture<CreateAmusementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAmusementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAmusementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
