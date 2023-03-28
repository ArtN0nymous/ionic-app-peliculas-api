import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent  implements OnInit {

  constructor() { }
  slideOpts={
    slidesPerView:1.5,
    freeMode:true
  }
  @Input() peliculas!:Pelicula[];
  ngOnInit() {}

}
