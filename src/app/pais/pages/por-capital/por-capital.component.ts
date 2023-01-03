import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
 
})
export class PorCapitalComponent {
  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false

  constructor(private capitalService: CapitalService){}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
      this.capitalService.buscarCapital(this.termino).subscribe( {
       next: (paises)=> {
        this.paises = paises;
       },
       error: (e)=> {
        this.hayError= true;
        this.paises = [];
      },
       complete: ()=> console.log("done")
     
    })
  }
 
}
