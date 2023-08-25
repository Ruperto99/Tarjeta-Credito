import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit{
  formularioVisible = false;
  debouncer: Subject<string> = new Subject();


  cardNumber    : string              = ''
  cardName      : string              = ''
  expiration    : string              = ''
  cvv           : string              = ''

  expirationDates: string[] = [];
  constructor( ){
    
    
  }
  
  // Agregando clase que rota la tarjeta
  rotate(tarjeta: HTMLElement) {
    tarjeta.classList.toggle('active')
    
  }
  ngOnInit() {
    this.displayForm();
  }
 

//mostrar la parte trasera y delantera
  displayForm() {
    document.getElementById('formulario-tarjeta')?.classList.toggle('active')
    this.formularioVisible = true;
  }
  
  complete( form: NgForm ) {

    form.value.cardNumber = this.cardNumber
      // Eliminando espacios en blanco
      .replace(/\s/g, '')
      // Elimina las letras
      .replace(/\D/g, '')
      // Agregar espacio cada cuatro números
      .replace(/([0-9]{4})/g, '$1 ')
      // Eliminando últimos espaciados
      .trim()
    
      const selectedDateParts = this.expiration.split('/');
      const selectedMonth = selectedDateParts[0];
      const selectedYear = selectedDateParts[1];


     

    this.voltearTarjeta()
  }


  voltearTarjeta(){
    if( document.getElementById('tarjeta')?.classList.contains('active') ){
      document.getElementById('tarjeta')?.classList.remove('active')
    }
  }

//metodo para que el boto de limpiar
  limpiarInputs() {
    this.cardNumber = '';
    this.cardName = '';
    this.expiration='';
    this.cvv = '';
}


  rellenarCVV(){
    if( !document.getElementById('tarjeta')?.classList.contains('active') ) {
      document.getElementById('tarjeta')?.classList.add('active')
    }
  }
// Función para hacer el pago
hacerPago() {
  if (
      this.cardNumber &&
      this.cardName &&
      this.expiration &&
      this.cvv
  ) {
      // Lógica para mostrar el metodo de pago exitoso 
      alert('Pago exitoso');
  } else {
      alert('Por favor complete la información requerida');
  }
}
}

