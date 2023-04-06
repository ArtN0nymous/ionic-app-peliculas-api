import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Detalles, Genero} from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  peliculas!:Detalles[];
  genres!:Genero[];
  PeliculasFiltradas:any[]=[];
  constructor(private dataLocalService:DataLocalService,private dataService:DataService) {}
  ngOnInit(): void {
      
  }
  ionViewWillEnter(){
    this.dataLocalService.cargarFavoritos().then((result)=>{
      this.peliculas=result;
      this.dataService.getGeneros().subscribe((res)=>{
        this.genres=res.genres;
        this.peliculasPorGenero(this.peliculas,this.genres);
      });
    });
  }
  peliculasPorGenero(peliculas:Detalles[],generos:Genero[]){
    let peliculas_porgenero:any= [];
    generos.forEach((g)=>{
      peliculas_porgenero.push({
        genero:g.name,
        pelis:peliculas.filter(pelicula=>{
          return pelicula.genres.find(genero=>genero.id===g.id);
        })
      });
    });
    this.PeliculasFiltradas=peliculas_porgenero;
  }
}
