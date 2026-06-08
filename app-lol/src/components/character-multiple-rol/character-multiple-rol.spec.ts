import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMultipleRol } from './character-multiple-rol';

describe('CharacterMultipleRol', () => {
  let component: CharacterMultipleRol;
  let fixture: ComponentFixture<CharacterMultipleRol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterMultipleRol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterMultipleRol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
