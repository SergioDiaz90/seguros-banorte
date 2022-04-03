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
  form: FormGroup
  elementsForms: any;
  createFormView: boolean;
  
  constructor( private formBuilder: FormBuilder ) {
    this.form = new FormGroup({})
    this.detailsCreateForms = {}
    this.createFormView = false
  }

  ngOnInit(): void {
    if ( this.detailsCreateForms ) {
      this.createForms()
    }
  }

  createForms () {
    if ( this.detailsCreateForms ) {
      this.elementsForms = this.detailsCreateForms.elementsForms
      for ( let item in this.elementsForms ) {
          this.form.addControl( this.elementsForms[item].nameField, new FormControl('', Validators.required ))
      }
    }

    this.createFormView = true
    console.log( 'forms', this.form )
  }

}
