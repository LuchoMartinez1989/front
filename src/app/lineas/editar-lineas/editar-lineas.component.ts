import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-lineas',
  templateUrl: './editar-lineas.component.html',
  styleUrls: ['./editar-lineas.component.css']
})
export class EditarLineasComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>
      {

     //  alert(params.id);

      }
      )
  }

}
      