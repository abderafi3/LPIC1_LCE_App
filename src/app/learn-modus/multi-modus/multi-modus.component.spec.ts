import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiModusComponent } from './multi-modus.component';

describe('MultiModusComponent', () => {
  let component: MultiModusComponent;
  let fixture: ComponentFixture<MultiModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiModusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
