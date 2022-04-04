import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateForms } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @Input() detailsCreateForms: ICreateForms
  @Input() infoDropdown: any

  form: FormGroup
  elementsForms: any;
  createFormView: boolean;
  selectBrand: any
  models: any;
  years: any;
  
  constructor( private formBuilder: FormBuilder ) {
    this.form = new FormGroup({})
    this.detailsCreateForms = {}
    this.models = {}
    this.years = []
    this.createFormView = false
  }

  ngOnInit(): void {
    if ( this.detailsCreateForms ) {
      this.createForms()
    }
  }

  createForms () {
    if ( this.detailsCreateForms ) {
      this.infoDropdown = {}
      this.elementsForms = this.detailsCreateForms.elementsForms
      for ( let item in this.elementsForms ) {
          this.form.addControl( this.elementsForms[item].nameField, new FormControl('', Validators.required ))
          if ( this.detailsCreateForms[this.elementsForms[item].nameField] ){
            this.infoDropdown[ this.elementsForms[item].nameField ] = this.detailsCreateForms[this.elementsForms[item].nameField]
          }
      }

      this.createOptionsModelsDropdown()
      this.createOptionYearsDropdown()
    }

    this.createFormView = true
  }

  createOptionsModelsDropdown () {
    for ( let idx in this.infoDropdown ) {
      this.infoDropdown[idx].map( elm => {
        if ( elm?.models ) {
          this.models[ elm.brand ] = elm.models
        }
      })
    }
  }

  createOptionYearsDropdown() {
    let date = new Date()
    let year = date.getFullYear()
    for ( let i = year; i >= 1990; i--) {
      this.years.push( i )
    }
  }

  onChangeBrand() {
    this.selectBrand = this.form.controls['brandCar'].value
  }
}
