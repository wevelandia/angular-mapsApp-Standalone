import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.css']
})
export class CounterAloneComponent {

  // Este valor tambien puede ser recibio, por ello se pone la etiqueta @Input
  // Desde el alone-page-component.html esta el ejemplo de enviarle un dato.
  @Input()
  public counter: number = 10;

}
