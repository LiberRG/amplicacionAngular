import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  datos: NgForm[] = [];
  @Output() datosArray: EventEmitter<Array<NgForm>> = new EventEmitter();


  onSubmit(f: NgForm) {
    this.datos = f.value;

    // @Output('datos') = this.datos;
    this.datosArray.emit( f.value );
    console.log("datos Array", this.datos);  
  }


}