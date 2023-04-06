import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Detalles, Creditos, Cast } from '../../interfaces/interfaces';
import { modalController } from '@ionic/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent  implements OnInit {
  @Input() id!:number;
  details!:Detalles;
  creditos!:Creditos;
  actores:Cast[]=[];
  limite_texto:number=100;
  label_estatus:boolean=false;
  isInfavorite = false;
  slideOpts={
    slidesPerView:3,
    freeMode:true
  }
  constructor(private dataService:DataService,private dataLocalService:DataLocalService) { }

  ngOnInit() {
    this.getDetails();
    this.getCreditos();
  }
  getDetails(){
    this.dataService.getDetails(this.id).subscribe((res:Detalles)=>{
      this.details=res;
      this.dataLocalService.isInFavorite(this.details.id).then((res)=>{
        this.isInfavorite=res;
      });
    });
  }
  getCreditos(){
    this.dataService.getCreditos(this.id).subscribe((res:Creditos)=>{
      this.creditos=res;
      this.actores=this.creditos.cast;;
    });
  }
  mostrarMas(){
    this.limite_texto+=100;
    if(this.details.overview.length<this.limite_texto){
      this.label_estatus=true;
    }
  }
  regresar(){
    modalController.dismiss();
  }
  favorito(){
    this.dataLocalService.guardarPelicula(this.details);
    this.isInfavorite=(this.isInfavorite)?false:true;
  }
}
