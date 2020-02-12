import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { ConnexionComponent } from './authentication/connexion/connexion.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'connexion', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthenticationModule,
    MainModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
