import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarMoviePageRoutingModule } from './buscar-movie-routing.module';

import { BuscarMoviePage } from './buscar-movie.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarMoviePageRoutingModule
  ],
  declarations: [BuscarMoviePage]
})
export class BuscarMoviePageModule {}
