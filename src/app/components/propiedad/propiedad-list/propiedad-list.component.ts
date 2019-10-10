import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedad-list',
  templateUrl: './propiedad-list.component.html',
  styleUrls: ['./propiedad-list.component.css']
})
export class PropiedadListComponent implements OnInit {

  propiedades: Array<any> = [
    {
      pos: 1,
      img: ''
    },
    {
      pos: 2,
      img: ''
    },
    {
      pos: 3,
      img: ''
    },
    {
      pos: 4,
      img: ''
    },
    {
      pos: 5,
      img: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  esPar(pos: number): boolean {
    return pos % 2 == 0;
  }

}
