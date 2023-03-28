import { Component, OnInit } from '@angular/core';
import { Pelicula, Respuesta } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasCartelera:Pelicula[]=[];
  slideOpts={
    slidesPerView:1.5,
    freeMode:true
  }
  constructor(private dataService:DataService) {}
  ngOnInit(): void {
      this.dataService.getCartelera().subscribe(res=>{
        this.peliculasCartelera=res.results;
      });
  }
}
