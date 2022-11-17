import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingProgramComponent } from './onboarding-program.component';

describe('OnboardingProgramComponent', () => {
  let component: OnboardingProgramComponent;
  let fixture: ComponentFixture<OnboardingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
