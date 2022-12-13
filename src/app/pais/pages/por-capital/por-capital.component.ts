import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
 
})
export class PorCapitalComponent {
  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false

  buscar(termino: string){
    console.log(termino)
  }
  sugerencias(){

  }
}
