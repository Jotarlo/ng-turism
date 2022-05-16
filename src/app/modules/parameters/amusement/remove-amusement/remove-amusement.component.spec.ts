import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAmusementComponent } from './remove-amusement.component';

describe('RemoveAmusementComponent', () => {
  let component: RemoveAmusementComponent;
  let fixture: ComponentFixture<RemoveAmusementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAmusementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAmusementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
