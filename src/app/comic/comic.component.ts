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
  texto: Array<String> = [];
  comic: object = { "ruta": "", "texto": [] };

  // @Input('categorias') categorias:string;
  // @Input('name') name:string;

  COMICS = {
    "animales": {
      "titulo": "Mi gato {{name}}",
      "ruta": "./assets/comic/animales/",
      "texto": [
        "Os voy a presentar a mi gato {{name}}.\nEs un  gato muy juguetón \npero se asusta hasta de un ratón.",
        "A {{name}} le encanta beber del agua frecas \ndirectamente del grifo del lavadero \nporque es todo un aventurero.",
        "Pero sobretodo durante las tardes de invierno \na {{name}} le gusta mucho dormir acurrucado \nmientras leo tranquila a su lado."
      ]
    },

    "frutas": {
      "titulo": "{{name}} y las frutas de temporada", "ruta": "./assets/comic/frutas/",
      "texto": [
        "A {{name}} le encantan las frutas y verduras y suele comprar las que estan de temporada.\nLas frutas de verano tienen tonos rojo. \nLas frutas de de VERANO son: las sandias, las fresas o los melocotones entre otros.",
        "Las frutas de otoños tiene colores amarillos o ocres.\nLas frutas y verduras de de OTOÑO son: las naranjas, las zanahorias o los frutos secos entre otros.",
        "Las frutas de invierno se mueven entre los azules y los verdes.\nLas frutas y verduras de de INVIERNO son: las berenjena, los kiwis, los aguacates o el brécol secos entre otros."
      ]
    },

    "otro": {
      "titulo": "El descubrimiento de {{name}} y Zala", 
      "ruta": "./assets/comic/otro/",
      "texto": [
        "{{name}} y su amiga Zala pasean por una de las montañas del planeta ZN15.\nCuando de la nada se encuentran con una nave abandonada.",
        "{{name}} nota un movimiento junto a la nave y Zala le hace entusiasmada señala a un pequeño hombrecito. \nEl piloto esta triste porque su increible aventura se ha acabado por el accidente.", 
        "Pero {{name}} tiene una idea y junto a Zala reunen a todos sus amigos.\nEl hombrecito les cuenta las historias de sus viajes mientras todos escuchas interesados."
      ]
    }
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
        this.ruta = this.COMICS.animales.ruta
        this.texto = this.COMICS.animales.texto
        break;
      case "frutas":
        this.titulo = this.COMICS.frutas.titulo.replace("{{name}}", nombre);
        this.ruta = this.COMICS.frutas.ruta
        this.texto = this.COMICS.frutas.texto
        break;
      case "otro":
        this.titulo = this.COMICS.otro.titulo.replace("{{name}}", nombre);
        this.ruta = this.COMICS.otro.ruta
        this.texto = this.COMICS.otro.texto
        break;
    }

  }


}
