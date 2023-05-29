import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public icons: Array<string>;
  constructor(){
    this.icons = ["assets/iconos/footer/compartir.png","assets/iconos/footer/imprimir.png", "assets/iconos/footer/descargar.png" ]
  }
}