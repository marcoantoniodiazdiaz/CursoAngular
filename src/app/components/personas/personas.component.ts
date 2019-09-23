import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  Personas: any[] = ['Marco', 'Daniel', 'Jose'];
  Mostrar = false;

  constructor() {}

  mostrarOcultar() {
    if (this.Mostrar) {
      this.Mostrar = false;
    } else {
      this.Mostrar = true;
    }
  }

  ngOnInit() {}
}
