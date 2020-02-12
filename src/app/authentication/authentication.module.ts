import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConnexionModule } from './connexion/connexion.module';



@NgModule({
  declarations: [],
  imports: [
    ConnexionModule,
    CommonModule
  ],
  exports: [
    ConnexionModule
  ]
})
export class AuthenticationModule { }
