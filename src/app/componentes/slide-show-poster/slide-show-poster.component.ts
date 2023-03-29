import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent  implements OnInit {
  slideOpts={
    slidesPerView:3.3,
    freeMode:true
  }
  @Input() peliculas!:Pelicula[];
  constructor() { }

  ngOnInit() {}

}
