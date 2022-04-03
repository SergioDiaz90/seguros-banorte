import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsComponent } from './forms.component';



@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class FormsCustomModule { }
