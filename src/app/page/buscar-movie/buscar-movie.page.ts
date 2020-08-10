import { Component, OnInit, ViewChild   } from '@angular/core';
import { ThemoviedbService } from '../../servicios/themoviedb.service'; 
import { IonInfiniteScroll, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-buscar-movie',
  templateUrl: './buscar-movie.page.html',
  styleUrls: ['./buscar-movie.page.scss'],
})
export class BuscarMoviePage implements OnInit {
  peli:string;
  numberPage:number=1;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private themoviedbService:ThemoviedbService, private menuCtrl: MenuController ) { }
  listMovies:any = [];
  nombreBusqueda:string;
  ngOnInit() {
    //this.getMovies();
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  getMovie(event){ 

    if(this.peli!=this.nombreBusqueda){
        this.listMovies.length=0;
        this.nombreBusqueda=this.peli;
        this.numberPage=1;
    }
     this.themoviedbService.getMovies(this.peli, this.numberPage).then(correcto=>{

        for(let i=0; i<correcto["results"].length; i++){
          this.listMovies.push(correcto["results"][i]);
        }
       
        if (this.listMovies.length == 200) {
          event.target.disabled = true;
        }
        event.target.complete();
        this.numberPage++;
        
     }).catch(error =>{
      
     })
  }
  
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
