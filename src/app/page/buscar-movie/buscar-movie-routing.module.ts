import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarMoviePage } from './buscar-movie.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarMoviePageRoutingModule {}
