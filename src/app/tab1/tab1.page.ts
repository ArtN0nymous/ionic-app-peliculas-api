import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Pelicula, Respuesta } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculas:Pelicula[]=[];
  populares:Pelicula[]=[];
  constructor(private dataService:DataService) {}
  ngOnInit(): void {
      this.dataService.getCartelera().subscribe((res:Respuesta)=>{
        this.peliculas=res.results;
      });
      this.dataService.getPopulares().subscribe((res:Respuesta)=>{
        this.populares=res.results;
      });
  }
}
