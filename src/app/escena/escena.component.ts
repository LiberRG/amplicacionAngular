import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit{
  @Input() path: String = "";
  @Input() position: any = "";
  @Input() text: String = "";
  @Input() name: any = "";

  constructor(){}
  ngOnInit() {
    let nombre = this.name;
    this.text = this.text.replace("{{name}}", nombre);
    this.path += this.position +".png";
  }
  
}
