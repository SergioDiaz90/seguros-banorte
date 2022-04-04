import { Component, OnInit } from '@angular/core';
import { ICreateForms } from '../interface/interfaces';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  detailsCreateForms: ICreateForms
  sendInfoForForms: boolean

  constructor() {
    this.sendInfoForForms = false
    this.detailsCreateForms = {}
  }

  ngOnInit(): void {
    this.createFieldsFormByQuote()
  }


  createFieldsFormByQuote () {
    this.detailsCreateForms = {
      nameFormGroup: 'formQuote',
      elementsForms: [
        {
          nameField: 'brandCar',
          name: 'Marca del auto',
          type: 'dropdown',
          start: 2,
          rowUbication: 1
        },
        {
          nameField: 'modelCar',
          name: 'Modelo del carro',
          type: 'dropdown',
          start: 2,
          rowUbication: 1
        },
        {
          nameField: 'year',
          name: 'Año del carro',
          type: 'dropdown',
          start: 1,
          rowUbication: 2
        },
        {
          nameField: 'email',
          name: 'Email',
          type: 'input',
          start: 3,
          rowUbication: 2
        },
      ],
      grid: {
        columns: 4,
        rows: 2
      },
      labelButton: 'Cotizar'
    }

    this.sendInfoForForms = true
  }
}
