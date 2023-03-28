import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
const URL = "https://image.tmdb.org/t/p";
@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  transform(path: string, size:string='w500'): string {
    if(!path){
      return environment.defaultImg;
    }
    const url_img= `${URL}/${size}${path}`;
    return url_img;
  }

}
