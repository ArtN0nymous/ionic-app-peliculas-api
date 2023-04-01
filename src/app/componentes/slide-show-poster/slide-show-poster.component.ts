import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';

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
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  async mostrarModal(id:number){
    const modal = await this.modalCtrl.create({
      component:DetallesComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }
}
