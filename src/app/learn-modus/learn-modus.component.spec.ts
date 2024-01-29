import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnModusComponent } from './learn-modus.component';

describe('LearnModusComponent', () => {
  let component: LearnModusComponent;
  let fixture: ComponentFixture<LearnModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnModusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
