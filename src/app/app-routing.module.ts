import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'buscar-movie',
    loadChildren: () => import('./page/buscar-movie/buscar-movie.module').then( m => m.BuscarMoviePageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./page/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'video-movie/:id',
    loadChildren: () => import('./page/video-movie/video-movie.module').then( m => m.VideoMoviePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
