import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

@NgModule({
 declarations: [
 FeatureComponent

 ],
 imports: [
   CommonModule
 ],
 exports:[FeatureComponent],
 providers:[]
})
export class FeatureModule {   }