import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character-service'; 
import { Character } from '../../model/character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {

  // Volvemos a 'character' para hermanarlo con tu HTML sin romper tipados
  public character: Character | null = null;

  constructor(
    private currentRoute: ActivatedRoute,
    private apiService: CharacterService
  ) {}

  ngOnInit(): void {
    const championId = this.currentRoute.snapshot.paramMap.get('id');
    if (championId) {
      this.fetchChampionDetails(championId);
    }
  }

  private fetchChampionDetails(id: string): void {
    this.apiService.getCharacterById(id).subscribe({
      next: (response) => {
        this.character = response;
        console.log('Datos del campeón obtenidos:', this.character);
      },
      error: (err) => {
        console.error('Error en el servicio de infraestructura:', err);
      }
    });
  }
}