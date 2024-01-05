import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintTargetFormComponent } from './sprint-target-form.component';

describe('SprintTargetFormComponent', () => {
  let component: SprintTargetFormComponent;
  let fixture: ComponentFixture<SprintTargetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprintTargetFormComponent]
    });
    fixture = TestBed.createComponent(SprintTargetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
