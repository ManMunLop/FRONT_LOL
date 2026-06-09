import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-tank',
  imports: [RouterLink],
  templateUrl: './character-tank.html',
  styleUrls: ['./character-tank.css'],
})
export class CharacterTank implements OnInit {
  public characters: Character[]=[];

  constructor(private _characterService: CharacterService){}

  ngOnInit(): void {
    this._characterService.getCharacterTank().subscribe(data => {
      this.characters = data;
    })
  }
}

