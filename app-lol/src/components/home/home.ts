import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  public characters: Character[] = [];

  constructor(
    private _characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this._characterService.getCharacters().subscribe(result => {
      this.characters = result;
    });
    
    console.log(this.characters);
  }



}
