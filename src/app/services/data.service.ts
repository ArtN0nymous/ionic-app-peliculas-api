import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Respuesta } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  popularesPage:number=0;
  constructor(private http:HttpClient) { }
  private executeQuery<T>(query:string){
    query=environment.apiUrl+query;
    query+=`&api_key=${environment.apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }
  getCartelera(){
    const hoy = new Date();
    const ultimoDia=new Date(hoy.getFullYear(),hoy.getMonth()+1,0).getDate();
    const mes = hoy.getMonth()+1;
    const mesString=(mes<10)?'0'+mes:mes;
    const fecha_ini = `${hoy.getFullYear()}-${mesString}-01`;
    const fecha_final = `${hoy.getFullYear()}-${mesString}-${(ultimoDia<10)?'0'+ultimoDia:ultimoDia}`;
    return this.executeQuery<Respuesta>(`/discover/movie?primary_release_date.gte=${fecha_ini}&primary_release_date.lte=${fecha_final}`);
  }

  getPopulares(){
    this.popularesPage+=1;
    const query=`/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.executeQuery<Respuesta>(query);
  }
}
