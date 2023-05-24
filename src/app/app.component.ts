import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   
  productos = [
    { 
      nombre: 'Camisa de manga corta', 
      precio: 15000, 
      descripcion: 'Camisa de algodón de alta calidad con estampado floral' 
    },
    { 
      nombre: 'Zapatos de cuero', 
      precio: 45000, 
      descripcion: 'Zapatos elegantes de cuero genuino con suela antideslizante' 
    },
    { 
      nombre: 'Teléfono inteligente', 
      precio: 120000, 
      descripcion: 'Teléfono de última generación con pantalla HD y cámara de alta resolución' 
    },
    { 
      nombre: 'Bolso de mano', 
      precio: 80000, 
      descripcion: 'Bolso de cuero sintético con múltiples compartimentos y correa ajustable' 
    },
    { 
      nombre: 'Reloj de pulsera', 
      precio: 60000, 
      descripcion: 'Reloj analógico resistente al agua con correa de acero inoxidable' 
    }
  ];
  
}
