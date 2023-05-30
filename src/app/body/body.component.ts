import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  public nombreWeb: string;
  arrDatos: Array<String> = [];
  hasData: boolean = false;

  formResponse: FormGroup;


  recibiRespuesta: any;

  constructor(private fb: FormBuilder) {

    this.nombreWeb = "FABULAS";

    this. formResponse = this.fb.group({
      name: new FormControl([this.arrDatos[0]]),
      category: new FormControl([this.arrDatos[1]])
    });

  }

  getArrDatos() {
    console.log(this.arrDatos);
    return this.arrDatos;
  }

  getHasData() {
    console.log(this.hasData);
    return this.hasData;
  }

  onSubmit() {
    let data = this.formResponse.value;
    if(data.name != "" && data.category != ""){
      this.arrDatos.push(data.name);
      this.arrDatos.push(data.category);
      this.hasData = true;
    }
  }

  reiniciar(){
    location.reload();
  }

}