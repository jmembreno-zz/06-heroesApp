import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(modulo => modulo.AuthModule) //Esta es la Clave del LazyLoad
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(modulo => modulo.HeroesModule)

  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    //component: ErrorPageComponent,
    redirectTo: '404'
  }

]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
