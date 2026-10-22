import { Component } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public arrayCoches: Array<Coche>;
  constructor() {
    this.arrayCoches = [
      new Coche("Ford", "Mustang", 0, 50),
      new Coche("Citroen", "C15", 0, 20),
      new Coche("Augi", "GT3", 0, 30),
    ]
  }
}
