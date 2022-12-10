import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar() {
    this.hayError = false;
    
      this.paisService.buscarPais(this.termino).subscribe( {
       next: (data)=> console.log(data),
       error: (e)=> this.hayError= true,
       complete: ()=> console.log("done")
     
    })
  }
}
