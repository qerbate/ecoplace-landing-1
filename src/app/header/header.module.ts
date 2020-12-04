import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
 declarations: [
 HeaderComponent

 ],
 imports: [
   CommonModule
 ],
 exports:[HeaderComponent],
 schemas: [
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
],
 providers:[]
})
export class  HeaderModule {   }