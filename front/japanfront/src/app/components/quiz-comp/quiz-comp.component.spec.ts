import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCompComponent } from './quiz-comp.component';

describe('QuizCompComponent', () => {
  let component: QuizCompComponent;
  let fixture: ComponentFixture<QuizCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
