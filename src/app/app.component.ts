import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  cars: Car[]

  id: number = 0
  marque: string = ''
  modele: string = ''

  constructor(){

    this.cars = [
      { 
        id: 0, 
        marque: 'Porsche', 
        modele: '911',
      },
      { 
        id: 1, 
        marque: 'Lexus', 
        modele: 'RX',
      },
      { 
        id: 2, 
        marque: 'Jeep', 
        modele: 'Wrangler'
      },
      { 
        id: 3, 
        marque: 'Hyundai ', 
        modele: 'Sonata'
      },
    ];

    this.id = this.cars[0].id
    this.marque = this.cars[0].marque
    this.modele = this.cars[0].modele

  }

  showCard(car: Car) {
    this.id = car.id;
    this.marque = car.marque;
    this.modele = car.modele;
  }
}

interface Car {
  id: number;
  marque: string;
  modele: string;
}
