import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoComponent } from './who.component';


@NgModule({
 declarations: [
 WhoComponent

 ],
 imports: [
   CommonModule
 ],
 exports:[WhoComponent],
 providers:[]
})
export class  WhoModule {   }