import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private _baseUrl: string = "http://localhost:8080/api/characters";

  constructor(
    private _http: HttpClient
  ){};

  public getCharacters(): Observable<Character[]>{
    return this._http.get<Character[]>(this._baseUrl);
  }

  public getCharacterById(id: string): Observable<Character>{
    //localhost:8080/api/character/6a0eacc4211dfe11cb09a637
    return this._http.get<Character>(this._baseUrl  +"/"+ id);
  }
  
  public getMultipleRol(): Observable<Character[]>{
    return this._http.get<Character[]>(this._baseUrl + "/filter/multirole");
  }

  public getCharacterTank(): Observable<Character[]>{
    return this._http.get<Character[]>(this._baseUrl + "/filter/tank");
  }
}
