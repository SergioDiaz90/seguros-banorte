import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { QuoteModule } from './quote/quote.module';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from './service/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuoteModule
  ],
  providers: [ ApiServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
