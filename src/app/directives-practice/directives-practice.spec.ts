import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPractice } from './directives-practice';

describe('DirectivesPractice', () => {
  let component: DirectivesPractice;
  let fixture: ComponentFixture<DirectivesPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
