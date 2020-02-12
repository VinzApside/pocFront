import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
