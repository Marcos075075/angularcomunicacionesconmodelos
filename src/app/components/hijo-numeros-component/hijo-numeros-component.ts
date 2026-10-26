import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numeros-component',
  standalone: false,
  styleUrl: './hijo-numeros-component.css',
  templateUrl: './hijo-numeros-component.html',
})
export class HijoNumerosComponent {
  @Input() numeros!: number;
  @Output() sumarNumerosPadre: EventEmitter<any> = new EventEmitter();

  sumarNumeros(): void {
    console.log(this.numeros);
    
    this.sumarNumerosPadre.emit(this.numeros);
  }
}
