import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTank } from './character-tank';

describe('CharacterTank', () => {
  let component: CharacterTank;
  let fixture: ComponentFixture<CharacterTank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterTank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
