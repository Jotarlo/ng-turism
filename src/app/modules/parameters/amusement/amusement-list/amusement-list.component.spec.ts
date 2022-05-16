import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmusementListComponent } from './amusement-list.component';

describe('AmusementListComponent', () => {
  let component: AmusementListComponent;
  let fixture: ComponentFixture<AmusementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmusementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmusementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
