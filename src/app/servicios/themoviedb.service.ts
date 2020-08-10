import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(private http: HttpClient) { }
  //urlBase="";

  
  getMovies(nameMovie: string, page:number){
    let url='https://api.themoviedb.org/3/search/movie?api_key=a331e06187f7e1e97bd3bba424c05510&language=en-US&query='+nameMovie+'&page='+page+'&include_adult=false';
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        
        resolve(res);
      },error=>{
        debugger
        reject(error); 
      })
    })
  }

  getMoviesDetalle(idMovie:string){
    let url='https://api.themoviedb.org/3/movie/'+idMovie+'?api_key=a331e06187f7e1e97bd3bba424c05510&language=en-US';
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        debugger
        reject(error); 
      })
    }) 
  }

  
  getMoviesTrailer(idTrailer:string){
    let url='https://api.themoviedb.org/3/movie/'+idTrailer+'/videos?api_key=a331e06187f7e1e97bd3bba424c05510&language=en-US';
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