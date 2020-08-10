import { Component, OnInit, DebugEventListener } from '@angular/core';
import { ThemoviedbService } from '../../servicios/themoviedb.service'; 
import { ComentarioService } from '../../servicios/comentario.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  detalleMovie:any=[];
  idMovie:string;
  comentarioMovie:any=[];
  verComentario:boolean=false;
  abajo:boolean=true;
  arriba:boolean=false;

  iComentar:boolean=false;
  abajoComentar:boolean=true;
  arribaComentar:boolean=false;
  constructor(private themoviedbService:ThemoviedbService, private router:ActivatedRoute, private comentarioService:ComentarioService) { }
 
  ngOnInit() {
    this.idMovie=this.router.snapshot.paramMap.get('id'); 
    this.getDetalleMovie();
    this.getComentario();
  }
 
  getDetalleMovie(){
    this.themoviedbService.getMoviesDetalle(this.idMovie).then(data=>{
      this.detalleMovie=data;
    }).catch(error=>{
      debugger
    })
  }

  getComentario(){
    this.comentarioService.getComentarios(this.idMovie).then(data=>{
      this.comentarioMovie=data;
    }).catch(error=>{
      debugger
    })
  }

  iComent(){
    this.iComentar=!this.iComentar;
    this.abajoComentar=!this.abajoComentar;
    this.arribaComentar=!this.arribaComentar;
  }

  verComent(){
    this.verComentario=!this.verComentario;
    this.abajo=!this.abajo;
    this.arriba=!this.arriba;
  }

}
