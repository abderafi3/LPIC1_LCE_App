import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleModusComponent } from './single-modus.component';

describe('SingleModusComponent', () => {
  let component: SingleModusComponent;
  let fixture: ComponentFixture<SingleModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleModusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
