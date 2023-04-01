import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent  implements OnInit {
  @Input() id!:number;
  constructor() { }

  ngOnInit() {
    console.log(this.id);
  }

}
