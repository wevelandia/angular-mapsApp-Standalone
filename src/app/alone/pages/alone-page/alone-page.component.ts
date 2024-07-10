import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from "../../components/counter-alone/counter-alone.component";
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  // Como esto va a ser una pagina, obiamos el selector.
  // selector: 'app-alone-page',
  // standalone: Esto es lo que hace un componente independiente.
  standalone: true,
  // No se usan las directivas de angular se puede obviar la siguiente linea
  //imports: [CommonModule],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css'],
  // Como se quiere usar el componente counter-alone se debe de importar
  imports: [CounterAloneComponent, SideMenuComponent]
})
export class AlonePageComponent {

}
