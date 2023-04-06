import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Detalles } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  peliculas!:Detalles[];
  constructor(private dataLocalService:DataLocalService) {}
  ngOnInit(): void {
      this.dataLocalService.cargarFavoritos().then((result)=>{
        this.peliculas=result;
      });
  }
}
