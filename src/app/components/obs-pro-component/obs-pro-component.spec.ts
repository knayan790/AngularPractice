import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsProComponent } from './obs-pro-component';

describe('ObsProComponent', () => {
  let component: ObsProComponent;
  let fixture: ComponentFixture<ObsProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsProComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ObsProComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
