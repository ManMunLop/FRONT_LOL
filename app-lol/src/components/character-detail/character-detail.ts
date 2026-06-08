import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {

  public id: string = '';
  public character?: Character;

  constructor( private _route: ActivatedRoute, private characterService: CharacterService ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')!; 

    this.characterService.getCharacterById(this.id).subscribe(result => 
      this.character = result
    );

  }

}
