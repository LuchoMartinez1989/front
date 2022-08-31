import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.portatilesdisponibles = [
        {
          marca: 'Lenovo',
          fechaLanzamiento: new Date(),
          precio: 1440.44,
          poster:'https://m.media-amazon.com/images/I/61cjgSurDdS._AC_SL1500_.jpg',
          tipo:'corp'

        },
        {
          marca: 'Asus',
          fechaLanzamiento: new Date('2016-06-05'),
          precio: 1440.44,
          poster:'https://m.media-amazon.com/images/I/61cjgSurDdS._AC_SL1500_.jpg',
          tipo:'consumo'

          
        },
      ]
    }, 500);
 
  }
  title = 'app';
  portatilesdisponibles;
  
portatilesllegando=[
  // {
  //   marca: 'dell',
  //   fechaLanzamiento: new Date(),
  //   precio: 1440.44
  // },
  // {
  //   marca: 'acer',
  //   fechaLanzamiento: new Date('2016-06-05'),
  //   precio: 1440.44
  // },
  // {
  //   marca: 'msi',
  //   fechaLanzamiento: new Date('2016-06-05'),
  //   precio: 1440.44
  // }
]

}
