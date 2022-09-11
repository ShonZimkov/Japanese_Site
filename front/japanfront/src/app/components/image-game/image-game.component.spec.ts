import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGameComponent } from './image-game.component';

describe('ImageGameComponent', () => {
  let component: ImageGameComponent;
  let fixture: ComponentFixture<ImageGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
