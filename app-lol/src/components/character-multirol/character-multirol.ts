import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-multirol',
  imports: [RouterLink],
  templateUrl: './character-multirol.html',
  styleUrl: './character-multirol.css',
})
export class CharacterMultirol implements OnInit{

  public characters: Character[]=[];

  constructor(private _characterService: CharacterService){}

  ngOnInit(): void {
    this._characterService.getMultipleRol().subscribe(data => {
      this.characters = data;
    })
  }
}
