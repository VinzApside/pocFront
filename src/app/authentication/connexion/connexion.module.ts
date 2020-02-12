import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConnexionComponent } from './connexion.component';



@NgModule({
  declarations: [ConnexionComponent],
  imports: [
    CommonModule
  ],
  exports: [ConnexionComponent]
})
export class ConnexionModule { }
