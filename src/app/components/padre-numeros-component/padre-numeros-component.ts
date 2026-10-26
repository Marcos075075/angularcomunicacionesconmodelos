import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  public numerosRand: Array<number>;
  public mensaje!: string;
  public suma: number;

  constructor(){
    this.numerosRand = [5, 11, 57],
    this.suma = 0
  }

  generarRandom(): void {
    this.numerosRand.push(Math.floor(Math.random() * 1001));
  }

  sumarNumerosPadre(num: number): void{
    console.log("Haciendo suma");
    console.log("padre:" + num);
    this.suma += num;
    console.log("suma:" + this.suma);
    
    this.mensaje = "La suma es: " + this.suma
    
  }

}
