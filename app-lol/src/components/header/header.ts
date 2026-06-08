import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive], // Importaciones nativas e independientes
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Creamos la configuración aquí para que el HTML no tenga que adivinar el tipo de objeto
  public exactRouteOptions = { exact: true };
}