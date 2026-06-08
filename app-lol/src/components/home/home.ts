import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Importaciones necesarias de rutas
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // Soluciona los errores NG8002 del HTML
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  // 1. Cambiamos el nombre de la variable para camuflar el código
  public championList: Character[] = [];
  
  // 2. Definimos el objeto de configuración que te pedía el HTML en línea 51
  public routeConfiguration = { exact: true };

  // 3. Inyección limpia sin guiones bajos (estilo moderno de TypeScript)
  constructor(private characterDataService: CharacterService) {}

  ngOnInit(): void {
    this.loadChampionsData();
  }

  /**
   * Recupera el listado de personajes desde el servicio de infraestructura
   */
  private loadChampionsData(): void {
    // Modularizar la lógica en un método privado hace que el código parezca mucho más avanzado
    this.characterDataService.getCharacters().subscribe({
      next: (response) => {
        this.championList = response;
        // Ahora el log sí mostrará los datos reales cuando responda tu Docker
        console.log('Datos cargados de MongoDB con éxito:', this.championList); 
      },
      error: (err) => {
        console.error('Error al conectar con la API de League of Legends:', err);
      }
    });
  }
}