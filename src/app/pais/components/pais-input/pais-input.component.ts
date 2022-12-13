import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter = new EventEmitter();
  @Output() onDebounce = new EventEmitter();

  dbouncer = new Subject();
  termino: string = '';

  ngOnInit(): void {
    this.dbouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor)
    });
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.dbouncer.next(this.termino);
  }
}
