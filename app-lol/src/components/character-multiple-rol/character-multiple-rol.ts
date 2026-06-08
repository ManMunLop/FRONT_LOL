import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-multiple-rol',
  imports: [],
  templateUrl: './character-multiple-rol.html',
  styleUrl: './character-multiple-rol.css',
})
export class CharacterMultipleRol implements OnInit{

  public characters: Character[]=[];

  constructor(private _characterService: CharacterService){}

  ngOnInit(): void {
    this._characterService.getMultipleRol().subscribe(data => {
      this.characters = data;
    })
  }
}
