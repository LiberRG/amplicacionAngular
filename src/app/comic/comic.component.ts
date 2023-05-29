import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() data: Array<any> = [];

  name: String = "";
  titulo: String = "";
  ruta: String = "";
  texto:Array<String> = [];
  comic: object = {"ruta": "", "texto": [] };

  // @Input('categorias') categorias:string;
  // @Input('name') name:string;

  COMICS = {
    "animales": { "titulo": "Mi gato {{name}}", "ruta": "./assets/comic/animales/", "texto": ["Os voy a presentar a mi gato {{name}}.\n Es un  gato muy juguetón \n pero se asusta hasta de un ratón", "A {{name}} le encanta beber del agua frecas del grifo del lavadero \n porque es todo un aventurero", "Pero sobretoto es le gusta dormir acurrucado \n mientras leo a su lado "]},
    "frutas": { "titulo": "{{name}} y las frutas de temporada", "ruta": "./assets/comic/frutas/", "texto": ["1","2","3"] },
    "otros": { "titulo": "El descubrimiennto de {{name}} y Lola", "ruta": "./assets/comic/otros/", "texto": ["1","2","3"] }
  };

  constructor() {
    // console.log(this.name);
    // console.log(typeof(this.comics));
    //    if(this.data[1] == 'animales'){

    //    }
  }

  ngOnInit() {
    console.log(this.data[0]);
    this.name = this.data[0];
    let nombre = this.data[0]
    console.log(typeof (this.COMICS));
    console.log(typeof (this.COMICS.animales.titulo));
    switch (this.data[1]) {
      case "animales":
        this.titulo = this.COMICS.animales.titulo.replace("{{name}}", nombre);
        this.ruta =  this.COMICS.animales.ruta
        this.texto =  this.COMICS.animales.texto
        break;
      case "frutas":
        this.titulo = this.COMICS.frutas.titulo.replace("{{name}}", nombre);
        this.ruta =  this.COMICS.frutas.ruta
        this.texto =  this.COMICS.frutas.texto
        break;
      case "otros":
        this.titulo = this.COMICS.otros.titulo.replace("{{name}}", nombre);
        this.ruta =  this.COMICS.otros.ruta
        this.texto =  this.COMICS.otros.texto
        break;
    }

  }


}
