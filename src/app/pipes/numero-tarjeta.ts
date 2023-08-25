import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'creditoNumero',
    pure: true,
  })
  export class CreditoNumerofiles implements PipeTransform{

    transform(numberCC: string): string {
  
        return numberCC
          // Eliminando espacios en blanco
          .replace(/\s/g, '')
          // Elimina las letras
          .replace(/\D/g, '')
          // Agregar espacio cada cuatro números
          .replace(/([0-9]{4})/g, '$1 ')
          // Eliminando últimos espaciados
          .trim()
      } 
  }