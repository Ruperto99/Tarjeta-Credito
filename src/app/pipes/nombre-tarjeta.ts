import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'creditoNombre',
    pure: true,
})

export class creditoNombreFile implements PipeTransform{
  chars = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/gim;
  numbers = /[0-9.]/g;
    transform(name: string): string {
    
      return name.replace(this.chars, '').replace(this.numbers, '');
    
     
      }
}