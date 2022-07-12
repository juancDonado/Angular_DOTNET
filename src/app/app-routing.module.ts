import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },

  { path: 'generos', component: IndiceGenerosComponent},
  { path: 'generos/crear', component: CrearGeneroComponent },

  { path: 'actores', component: IndiceActoresComponent},
  { path: 'actores/crear', component: CrearActorComponent },

  { path: 'cines', component: IndiceCinesComponent},
  { path: 'generos/crear', component: CrearCineComponent },

  { path: 'generos', component: IndiceGenerosComponent},
  { path: 'generos/crear', component: CrearGeneroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
