import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../Interfaces/producto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Producto[], searchTerm: string): any {
    if(!value) return [];
    if(!searchTerm) return value;
    return value.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
