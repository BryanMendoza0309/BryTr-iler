import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }


  getComentarios(idMovies:string){
    let url='http://127.0.0.1:8000/api/comentarios/'+idMovies;
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        debugger
        reject(error); 
      })
    }) 
  }
}
