import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Detalles, Pelicula } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  _peliculas:Detalles[]=[];
  _storage:Storage|null=null;
  constructor(private storage:Storage,private toastCtrl:ToastController) {
    this.init();
    this.cargarFavoritos()
  }
  guardarPelicula(pelicula:Detalles){
    
    const exist = this._peliculas.find(pel=>pel.id===pelicula.id);
    let message = '';
    if(exist){
      this._peliculas=this._peliculas.filter(pel=>pel.id!==pelicula.id);
      message='Se eliminó de favoritos';
    }else{
      this._peliculas=[pelicula,...this._peliculas];
      message='Sea gregó a favoritos';
    }
    this.storage.set('peliculas',this._peliculas);
    this.mostrarToast(message);
  }
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }
  async mostrarToast(message:string){
    const toast = await this.toastCtrl.create({
      message,
      duration:1500
    });
    toast.present();
  }
  async cargarFavoritos(){
    const peliculas = await this.storage.get('peliculas');
    this._peliculas=peliculas||[];
    return peliculas;
  }
  async isInFavorite(id:number){
    await this.cargarFavoritos();
    return !!this._peliculas.find(pel=>pel.id===id);
  }
}
