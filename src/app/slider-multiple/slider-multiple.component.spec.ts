import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMultipleComponent } from './slider-multiple.component';

describe('SliderMultipleComponent', () => {
  let component: SliderMultipleComponent;
  let fixture: ComponentFixture<SliderMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
