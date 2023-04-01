import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent  implements OnInit {

  constructor(private modalCtrl:ModalController) { }
  slideOpts={
    slidesPerView:1.5,
    freeMode:true
  }
  @Input() peliculas!:Pelicula[];
  ngOnInit() {}
  async onClick(id:number){
    const modal = await this.modalCtrl.create({
      component:DetallesComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }
}
