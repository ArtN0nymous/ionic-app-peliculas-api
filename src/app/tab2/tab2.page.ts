import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Pelicula, Respuesta } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../componentes/detalles/detalles.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar:string='';
  peliculas:Pelicula[] = [];
  buscando = false;
  sugerencias = ['Spiderman','Avengers','La vida es bella','Shazam'];
  constructor(private dataService:DataService,private modalCtrl:ModalController) {}
  buscar(ev:any){
    this.buscando=true;
    const valor = ev.detail.value;
    this.dataService.buscarPelicula(valor).subscribe((res:Respuesta)=>{
      this.peliculas=res.results;
      console.log(this.peliculas);
      this.buscando=false;
    });
  }
  async onClick(id:number){
    console.log(id);
    const modal = await this.modalCtrl.create({
      component:DetallesComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }
}
