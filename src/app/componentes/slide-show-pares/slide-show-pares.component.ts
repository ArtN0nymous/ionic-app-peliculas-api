import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent  implements OnInit {
  slideOpts={
    slidesPerView:4,
    freeMode:true
  }
  @Input() peliculas!:Pelicula[];
  @Output() cargarMas=new EventEmitter();
  constructor() { }

  ngOnInit() {}
  onClick(){
    console.log("caragr más");
  }
}
