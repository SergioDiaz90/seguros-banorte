import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { QuoteRoutingModule } from './quote-routing.module';
import { FormsComponent } from '../components/forms-component/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    QuoteComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuoteModule { }
