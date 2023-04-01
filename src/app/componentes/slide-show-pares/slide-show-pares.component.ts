import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';

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
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  onClick(){
    this.cargarMas.emit();
  }
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
