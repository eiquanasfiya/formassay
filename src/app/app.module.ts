import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAray1Component } from './form-aray1/form-aray1.component';
import { FromAray2Component } from './from-aray2/from-aray2.component';
import {AccordionModule} from 'primeng/accordion'; 
@NgModule({
  declarations: [
    AppComponent,
    FormAray1Component,
    FromAray2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
