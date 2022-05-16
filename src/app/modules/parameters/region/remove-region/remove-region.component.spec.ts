import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRegionComponent } from './remove-region.component';

describe('RemoveRegionComponent', () => {
  let component: RemoveRegionComponent;
  let fixture: ComponentFixture<RemoveRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
